import { v4 as uuid } from "uuid";
import { LatLng } from "./LatLng";

export type PlantId = "PlantId";
export type PlantName = "PlantName";
export type PlantStatus =
  | "to plant"
  | "planted"
  | "to sow"
  | "sowed"
  | "position requires verification"
  | "dead";

export interface Plant {
  id: PlantId;
  name: PlantName;
  position: LatLng;
  /** in meters */
  currentDiameter: number;
  /** in meters */
  expectedDiameter: number;
  status?: PlantStatus;
}

export const createPlantId = () => uuid() as PlantId;
