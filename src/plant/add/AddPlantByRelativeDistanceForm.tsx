import { core } from "../../core";
import { reactiveComponent } from "../../util/reactiveComponent";

const { store } = core.plant.addByRelativeDistance;

const onNameChange = (e: any) =>
  store.dispatch({ APBRD_nameChanged: e.target.value });
const onCurrentDiameterChange = (e: any) =>
  store.dispatch({ APBRD_currentDiameterChanged: parseFloat(e.target.value) });
const onExpectedDiameterChange = (e: any) =>
  store.dispatch({ APBRD_expectedDiameterChanged: parseFloat(e.target.value) });
const onSelectFirstRelativeButtonClick = store.action(
  "APBRD_selectFirstRelativeButtonClicked"
);
const onDistanceToFirstRelativeChange = (e: any) =>
  store.dispatch({
    APBRD_distanceToFirstRelativeChanged: parseFloat(e.target.value),
  });
const onSelectSecondRelativeButtonClick = store.action(
  "APBRD_selectSecondRelativeButtonClicked"
);
const onDistanceToSecondRelativeChange = (e: any) =>
  store.dispatch({
    APBRD_distanceToSecondRelativeChanged: parseFloat(e.target.value),
  });
const onUnselectButtonClicked = store.action(
  "APBRD_unselectPositionButtonClicked"
);
const onConfirmAddingPlantButtonClick = store.action(
  "APBRD_confirmButtonClicked"
);

const numberInputWidth = 50;

export const AddPlantByRelativeDistanceForm = reactiveComponent(
  store.pick("status", "fields", "selectedPosition", "canAddPlant"),
  ({ status, fields, selectedPosition, canAddPlant }) =>
    status === "hidden" ? null : (
      <div>
        <h4>Add plant by relative distance</h4>
        <div>
          <label>Name</label>
          <input type="text" value={fields.name} onChange={onNameChange} />
        </div>
        <div>
          <label>Current diameter</label>
          <input
            type="range"
            value={fields.currentDiameter}
            onChange={onCurrentDiameterChange}
            step={1}
            min={1}
            max={20}
          />
          <input
            type="number"
            value={fields.currentDiameter}
            onChange={onCurrentDiameterChange}
            style={{ width: 30 }}
            min={1}
            max={20}
          />
        </div>
        <div>
          <label>Expected diameter</label>
          <input
            type="range"
            value={fields.expectedDiameter}
            onChange={onExpectedDiameterChange}
            step={1}
            min={1}
            max={20}
          />
          <input
            type="number"
            value={fields.expectedDiameter}
            onChange={onExpectedDiameterChange}
            style={{ width: 30 }}
            min={1}
            max={20}
          />
        </div>
        <div>
          <label>First relative</label>
          {/* TODO Tooltip */}
          <button
            onClick={onSelectFirstRelativeButtonClick}
            disabled={status === "selecting-first-plant"}
          >
            Select
          </button>
          {fields.firstRelative && fields.firstRelative.name}
        </div>
        <div>
          <label>distance</label>
          <input
            type="range"
            value={fields.distanceToFirstRelative}
            onChange={onDistanceToFirstRelativeChange}
            step={1}
            min={1}
            max={50}
          />
          <input
            type="number"
            value={fields.distanceToFirstRelative}
            onChange={onDistanceToFirstRelativeChange}
            style={{ width: numberInputWidth }}
            min={1}
            max={50}
          />
        </div>
        <div>
          <label>Second relative</label>
          {/* TODO Tooltip */}
          <button
            onClick={onSelectSecondRelativeButtonClick}
            disabled={status === "selecting-second-plant"}
          >
            Select
          </button>
          {fields.secondRelative && fields.secondRelative.name}
        </div>
        <div>
          <label>distance</label>
          <input
            type="range"
            value={fields.distanceToSecondRelative}
            onChange={onDistanceToSecondRelativeChange}
            step={1}
            min={1}
            max={50}
          />
          <input
            type="number"
            value={fields.distanceToSecondRelative}
            onChange={onDistanceToSecondRelativeChange}
            style={{ width: numberInputWidth }}
            min={1}
            max={50}
          />
        </div>
        {selectedPosition !== undefined && (
          <div>
            <label>Selected position</label>
            <button onClick={onUnselectButtonClicked}>Unselect</button>
            <div>
              <label>LAT</label>
              {selectedPosition.lat}
            </div>
            <div>
              <label>LNG</label>
              {selectedPosition.lng}
            </div>
          </div>
        )}
        <div>
          <button
            onClick={onConfirmAddingPlantButtonClick}
            disabled={!canAddPlant}
          >
            Confirm adding plant
          </button>
        </div>
      </div>
    )
);
