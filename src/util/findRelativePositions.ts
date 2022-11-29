import { LatLng } from "../domain/LatLng";
import { findIntersections } from "./findIntersections";
import { haversine } from "./haversine";

export const findRelativePositions = (
  a: { position: LatLng; distance: number },
  b: { position: LatLng; distance: number }
): [LatLng, LatLng] | null => {
  const p_a = a.position;
  const p_b = b.position;

  const dx = haversine(p_a, { lat: p_a.lat, lng: p_b.lng });
  const dy = haversine(p_a, { lat: p_b.lat, lng: p_a.lng });
  const x = p_a.lng < p_b.lng ? dx : -dx;
  const y = p_a.lat < p_b.lat ? dy : -dy;

  const intersections = findIntersections(
    { x: 0, y: 0, r: a.distance },
    { x, y, r: b.distance }
  );
  if (intersections.intersect_count !== 2) return null;
  const xRatio = Math.abs(p_a.lng - p_b.lng) / dx;
  const yRatio = Math.abs(p_a.lat - p_b.lat) / dy;
  const relativePositions: [LatLng, LatLng] = [
    {
      lat: p_a.lat + intersections.point_1.y * yRatio,
      lng: p_a.lng + intersections.point_1.x * xRatio,
    },
    {
      lat: p_a.lat + intersections.point_2.y * yRatio,
      lng: p_a.lng + intersections.point_2.x * xRatio,
    },
  ];
  if (
    isNaN(relativePositions[0].lat) ||
    isNaN(relativePositions[0].lng) ||
    isNaN(relativePositions[1].lat) ||
    isNaN(relativePositions[1].lng)
  )
    return null;
  return relativePositions;
};
