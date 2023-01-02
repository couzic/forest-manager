import {
  forestMapMenuInitialState,
  ForestMapMenuState,
} from "../map/ForestMapMenuState";
import { initialPlantState, PlantState } from "../plant/PlantState";

export interface RootState {
  plant: PlantState;
  menu: ForestMapMenuState;
}

export const initialRootState: RootState = {
  plant: initialPlantState,
  menu: forestMapMenuInitialState,
};
