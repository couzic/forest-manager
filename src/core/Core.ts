import { createForestMapMenuStore } from "../map/ForestMapMenuStore";
import { createAddPlantByRelativeDistanceStore } from "../plant/add/AddPlantByRelativeDistanceStore";
import { createPlantStore } from "../plant/PlantStore";
import { createRootStore } from "./RootStore";

export const createCore = () => {
  const rootStore = createRootStore();
  const plantStore = createPlantStore(rootStore);
  return {
    menu: { store: createForestMapMenuStore(rootStore) },
    plant: {
      store: plantStore,
      addByRelativeDistance: {
        store: createAddPlantByRelativeDistanceStore(plantStore),
      },
    },
  };
};

export type Core = ReturnType<typeof createCore>;
