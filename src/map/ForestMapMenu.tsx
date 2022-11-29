import { core } from "../core";
import { AddPlantByRelativeDistanceForm } from "../plant/add/AddPlantByRelativeDistanceForm";

const { store } = core.plant;

const onAddPlantByRelativeDistanceButtonClick = () =>
  store.dispatch({ addPlantByRelativeDistanceButtonClicked: undefined });

export const ForestMapMenu = () => (
  <div style={{ width: "18vw", height: "78vh", margin: "1vh 1vw" }}>
    <button
      style={{ width: "100%" }}
      onClick={onAddPlantByRelativeDistanceButtonClick}
    >
      Add plant (relative distance)
    </button>

    <AddPlantByRelativeDistanceForm />
  </div>
);
