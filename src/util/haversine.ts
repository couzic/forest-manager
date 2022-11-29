import { LatLng } from "../domain/LatLng";

const asin = Math.asin;
const cos = Math.cos;
const sin = Math.sin;
const sqrt = Math.sqrt;
const PI = Math.PI;

// equatorial mean radius of Earth (in meters)
const R = 6378137;

function squared(x: number) {
  return x * x;
}
function toRad(x: number) {
  return (x * PI) / 180.0;
}
function hav(x: number) {
  return squared(sin(x / 2));
}

interface LatitudeLongitude {
  latitude: number;
  longitude: number;
}

interface LatLon {
  lat: number;
  lon: number;
}

interface GeoJSONPoint extends Array<number | number> {
  0: number;
  1: number;
}

type Coordinates = LatitudeLongitude | LatLng | LatLon | GeoJSONPoint;

/**
 * Return the Haversine distance in meters
 * @param a - first location
 * @param b - second location
 */
export function haversine(a: Coordinates, b: Coordinates): number {
  const aLat = toRad(
    Array.isArray(a) ? a[1] : "latitude" in a ? a.latitude : a.lat
  );
  const bLat = toRad(
    Array.isArray(b) ? b[1] : "latitude" in b ? b.latitude : b.lat
  );
  const aLng = toRad(
    Array.isArray(a)
      ? a[0]
      : "longitude" in a
      ? a.longitude
      : "lng" in a
      ? a.lng
      : a.lon
  );
  const bLng = toRad(
    Array.isArray(b)
      ? b[0]
      : "longitude" in b
      ? b.longitude
      : "lng" in b
      ? b.lng
      : b.lon
  );

  const ht = hav(bLat - aLat) + cos(aLat) * cos(bLat) * hav(bLng - aLng);
  return 2 * R * asin(sqrt(ht));
}
