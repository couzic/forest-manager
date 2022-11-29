import { beforeEach, describe, expect, it } from "vitest";
import { createTestCore } from "../core/createTestCore";
import { createPlantId, Plant, PlantName } from "../domain/Plant";
import { createPlantStore, PlantStore } from "./PlantStore";

describe(createPlantStore.name, () => {
  let store: PlantStore;

  beforeEach(() => {
    const core = createTestCore();
    store = core.plant.store;
    store.currentState.list.forEach((plant) =>
      store.dispatch({ removePlant: plant.id })
    );
  });
  describe("when two plants added", () => {
    const firstPlant: Plant = {
      id: createPlantId(),
      name: "First plant" as PlantName,
      position: { lat: 48.6271, lng: -2.4335 },
      currentDiameter: 1,
      expectedDiameter: 6,
    };
    const secondPlant: Plant = {
      id: createPlantId(),
      name: "Second plant" as PlantName,
      position: { lat: 48.6272, lng: -2.4334 },
      currentDiameter: 4,
      expectedDiameter: 12,
    };
    beforeEach(() => {
      store.dispatch({ addPlant: firstPlant });
      store.dispatch({ addPlant: secondPlant });
    });
    it("stores plants", () => {
      expect(store.currentState.list).to.have.length(2);
    });
    it("removes plants", () => {
      store.dispatch({ removePlant: firstPlant.id });
      store.dispatch({ removePlant: secondPlant.id });
      expect(store.currentState.list).to.have.length(0);
    });
  });
});
