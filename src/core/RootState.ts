import { initialPlantState, PlantState } from "../plant/PlantState";

export interface RootState {
  plant: PlantState;
}

export const initialRootState: RootState = { plant: initialPlantState };
