import { RootStore } from "../core/RootStore";
import { Plant, PlantId } from "../domain/Plant";

export const createPlantStore = (rootStore: RootStore) =>
  rootStore
    .focusPath("plant")
    .actionTypes<{
      addPlant: Plant;
      removePlant: PlantId;
      addPlantByRelativeDistanceButtonClicked: void;
      plantClicked: Plant;
      doNothing: void;
    }>()
    .updates((_) => ({
      addPlant: (plant) =>
        _.focusPath("list").update((list) => [...list, plant]),
      removePlant: (plantId) =>
        _.focusPath("list").update((list) =>
          list.filter((_) => _.id !== plantId)
        ),
    }));

export type PlantStore = ReturnType<typeof createPlantStore>;
