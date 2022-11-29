import { beforeEach, describe, expect, it } from "vitest";
import { createTestCore } from "../../core/createTestCore";
import { LatLng } from "../../domain/LatLng";
import { createPlantId, Plant, PlantName } from "../../domain/Plant";
import { PlantStore } from "../PlantStore";
import { addPlantByRelativeDistanceFormInitialState } from "./AddPlantByRelativeDistanceFormState";
import {
  AddPlantByRelativeDistancStore as AddPlantByRelativeDistanceStore,
  createAddPlantByRelativeDistanceStore,
} from "./AddPlantByRelativeDistanceStore";

describe(createAddPlantByRelativeDistanceStore.name, () => {
  let plantStore: PlantStore;
  let store: AddPlantByRelativeDistanceStore;

  beforeEach(() => {
    const core = createTestCore();
    plantStore = core.plant.store;
    store = core.plant.addByRelativeDistance.store;
    plantStore.currentState.list.forEach((plant) =>
      store.dispatch({ removePlant: plant.id })
    );
  });
  describe("when two plants added", () => {
    const firstPlant: Plant = {
      id: createPlantId(),
      name: "First plant" as PlantName,
      position: { lat: 48.62716109732685, lng: -2.433522505538106 },
      currentDiameter: 1,
      expectedDiameter: 8,
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
    it("initially hides form", () => {
      expect(store.currentState.status).to.equal("hidden");
    });
    describe("when add plant by relative distance button clicked", () => {
      beforeEach(() => {
        store.dispatch({ addPlantByRelativeDistanceButtonClicked: undefined });
      });
      it("shows form", () => {
        expect(store.currentState.status).to.equal("visible");
      });
      describe("when input value changes", () => {
        beforeEach(() => {
          store.dispatch({ APBRD_nameChanged: "Plant name" });
          store.dispatch({ APBRD_currentDiameterChanged: 2 });
          store.dispatch({ APBRD_expectedDiameterChanged: 6 });
          store.dispatch({ APBRD_distanceToFirstRelativeChanged: 7 });
          store.dispatch({ APBRD_distanceToSecondRelativeChanged: 9 });
        });
        it("stores values", () => {
          const { fields } = store.currentState;
          expect(fields.name).to.equal("Plant name");
          expect(fields.currentDiameter).to.equal(2);
          expect(fields.expectedDiameter).to.equal(6);
          expect(fields.distanceToFirstRelative).to.equal(7);
          expect(fields.distanceToSecondRelative).to.equal(9);
        });
        // TODO coerce current diameter within bounds of expected diameter
        // TODO when relative selected, automatically compute distance based on two plants' expected diameters
      });
      describe("when select first plant button clicked", () => {
        beforeEach(() => {
          store.dispatch({ APBRD_selectFirstRelativeButtonClicked: undefined });
        });
        it("has selecting first plant status", () => {
          expect(store.currentState.status).to.equal("selecting-first-plant");
        });
        describe("when plant clicked", () => {
          beforeEach(() => {
            store.dispatch({ plantClicked: firstPlant });
          });
          it("selects first plant", () => {
            expect(store.currentState.fields.firstRelative).to.deep.equal(
              firstPlant
            );
          });
          it("resets status", () => {
            expect(store.currentState.status).to.equal("visible");
          });

          describe("when select second plant button clicked", () => {
            beforeEach(() => {
              store.dispatch({
                APBRD_selectSecondRelativeButtonClicked: undefined,
              });
            });
            it("has selecting second plant status", () => {
              expect(store.currentState.status).to.equal(
                "selecting-second-plant"
              );
            });
            describe("when plant clicked", () => {
              beforeEach(() => {
                store.dispatch({ plantClicked: secondPlant });
              });
              it("selects first plant", () => {
                expect(store.currentState.fields.secondRelative).to.deep.equal(
                  secondPlant
                );
              });
              it("resets status", () => {
                expect(store.currentState.status).to.equal("visible");
              });
              it("shows possible positions", () => {
                expect(store.currentState.possiblePositions).to.deep.equal([
                  {
                    lat: 48.62722021616945,
                    lng: -2.4334900873242535,
                  },
                  {
                    lat: 48.6271408811574,
                    lng: -2.4334324182138523,
                  },
                ]);
              });
              it("still can't create plant", () => {
                expect(store.currentState.canAddPlant).to.be.false;
              });
              describe("when first position clicked", () => {
                let firstPosition: LatLng;
                beforeEach(() => {
                  firstPosition = store.currentState.possiblePositions[0];
                  store.dispatch({
                    APBRD_possiblePositionClicked: firstPosition,
                  });
                });
                it("stores selected position", () => {
                  expect(store.currentState.selectedPosition).to.deep.equal(
                    firstPosition
                  );
                });
                it("can add plant", () => {
                  expect(store.currentState.canAddPlant).to.be.true;
                });
                describe("when unselect button clicked", () => {
                  beforeEach(() => {
                    store.dispatch({
                      APBRD_unselectPositionButtonClicked: undefined,
                    });
                  });
                  it("unselects selected position", () => {
                    expect(store.currentState.selectedPosition).to.be.undefined;
                  });
                });
                describe("when confirm adding plant button clicked", () => {
                  beforeEach(() => {
                    store.dispatch({ APBRD_confirmButtonClicked: undefined });
                  });
                  it("add plant to list", () => {
                    expect(plantStore.currentState.list).to.have.length(3);
                  });
                  it("hides form", () => {
                    expect(store.currentState.status).to.equal("hidden");
                  });
                  describe("when adding ANOTHER plant", () => {
                    beforeEach(() => {
                      store.dispatch({
                        addPlantByRelativeDistanceButtonClicked: undefined,
                      });
                    });
                    it("clears form", () => {
                      expect(store.currentState.selectedPosition).to.be
                        .undefined;
                      expect(store.currentState.fields).to.deep.equal(
                        addPlantByRelativeDistanceFormInitialState.fields
                      );
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
