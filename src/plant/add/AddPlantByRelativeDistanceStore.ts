import { filter, map, pipe } from "rxjs";
import { LatLng } from "../../domain/LatLng";
import { createPlantId, Plant, PlantName } from "../../domain/Plant";
import { findRelativePositions } from "../../util/findRelativePositions";
import { PlantStore } from "../PlantStore";
import { addPlantByRelativeDistanceFormInitialState } from "./AddPlantByRelativeDistanceFormState";

export const createAddPlantByRelativeDistanceStore = (plantStore: PlantStore) =>
  plantStore
    .focusPath("addByRelativeDistanceForm")
    .actionTypes<{
      APBRD_nameChanged: string;
      APBRD_currentDiameterChanged: number;
      APBRD_expectedDiameterChanged: number;
      APBRD_selectFirstRelativeButtonClicked: void;
      APBRD_setFirstRelative: Plant;
      APBRD_distanceToFirstRelativeChanged: number;
      APBRD_selectSecondRelativeButtonClicked: void;
      APBRD_setSecondRelative: Plant;
      APBRD_distanceToSecondRelativeChanged: number;
      APBRD_possiblePositionClicked: LatLng;
      APBRD_unselectPositionButtonClicked: void;
      APBRD_confirmButtonClicked: void;
    }>()
    .updates((_) => ({
      addPlantByRelativeDistanceButtonClicked: () =>
        _.setFields({
          status: "visible",
          fields: addPlantByRelativeDistanceFormInitialState.fields,
          selectedPosition: undefined,
        }),
      APBRD_nameChanged: _.focusPath("fields", "name").setValue(),
      APBRD_currentDiameterChanged: _.focusPath(
        "fields",
        "currentDiameter"
      ).setValue(),
      APBRD_expectedDiameterChanged: _.focusPath(
        "fields",
        "expectedDiameter"
      ).setValue(),
      APBRD_distanceToFirstRelativeChanged: _.focusPath(
        "fields",
        "distanceToFirstRelative"
      ).setValue(),
      APBRD_distanceToSecondRelativeChanged: _.focusPath(
        "fields",
        "distanceToSecondRelative"
      ).setValue(),
      APBRD_selectFirstRelativeButtonClicked: () =>
        _.setFields({ status: "selecting-first-plant" }),
      APBRD_setFirstRelative: (plant) =>
        _.pipe(
          _.focusPath("fields", "firstRelative").setValue(plant),
          _.setFields({ status: "visible" })
        ),
      APBRD_selectSecondRelativeButtonClicked: () =>
        _.setFields({ status: "selecting-second-plant" }),
      APBRD_setSecondRelative: (plant) =>
        _.pipe(
          _.focusPath("fields", "secondRelative").setValue(plant),
          _.setFields({ status: "visible" })
        ),
      APBRD_possiblePositionClicked: _.focusPath("selectedPosition").setValue(),
      APBRD_unselectPositionButtonClicked: () =>
        _.setFields({ selectedPosition: undefined }),
      APBRD_confirmButtonClicked: () => _.setFields({ status: "hidden" }),
    }))
    .epics((store) => ({
      plantClicked: map((plant) => {
        const { status } = store.currentState;
        if (status === "selecting-first-plant")
          return { APBRD_setFirstRelative: plant };
        if (status === "selecting-second-plant")
          return { APBRD_setSecondRelative: plant };
        return { doNothing: undefined };
      }),
      APBRD_confirmButtonClicked: pipe(
        map(() => store.currentState),
        filter((_) => Boolean(_.selectedPosition)),
        map(
          ({ fields, selectedPosition }): Plant => ({
            id: createPlantId(),
            name: fields.name as PlantName,
            position: selectedPosition!,
            currentDiameter: fields.currentDiameter,
            expectedDiameter: fields.expectedDiameter,
          })
        ),
        map((plant) => ({ addPlant: plant }))
      ),
    }))
    .computeFromFields(["fields", "status"], ({ fields, status }) => {
      const failsafe = { possiblePositions: [] };
      if (status !== "visible") return failsafe;
      const {
        firstRelative,
        secondRelative,
        distanceToFirstRelative,
        distanceToSecondRelative,
      } = fields;
      if (!firstRelative || !secondRelative) return failsafe;
      const possiblePositions = findRelativePositions(
        { position: firstRelative.position, distance: distanceToFirstRelative },
        {
          position: secondRelative.position,
          distance: distanceToSecondRelative,
        }
      );
      if (!possiblePositions) return failsafe;
      return { possiblePositions };
    })
    .computeFromFields(["selectedPosition"], ({ selectedPosition }) => ({
      canAddPlant: selectedPosition !== undefined,
    }));

export type AddPlantByRelativeDistancStore = ReturnType<
  typeof createAddPlantByRelativeDistanceStore
>;
