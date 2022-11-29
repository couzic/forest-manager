import { LatLng } from "../../domain/LatLng";
import { Plant } from "../../domain/Plant";

export interface AddPlantByRelativeDistanceFormState {
  status:
    | "hidden"
    | "visible"
    | "selecting-first-plant"
    | "selecting-second-plant";
  fields: {
    name: string;
    currentDiameter: number;
    expectedDiameter: number;
    firstRelative?: Plant;
    distanceToFirstRelative: number;
    secondRelative?: Plant;
    distanceToSecondRelative: number;
  };
  selectedPosition?: LatLng;
}

export const addPlantByRelativeDistanceFormInitialState: AddPlantByRelativeDistanceFormState =
  {
    status: "hidden",
    fields: {
      name: "",
      currentDiameter: 1,
      expectedDiameter: 5,
      distanceToFirstRelative: 5,
      distanceToSecondRelative: 5,
    },
  };
