import { Circle } from "react-leaflet";
import { core } from "../../core";
import { LatLng } from "../../domain/LatLng";
import { reactiveComponent } from "../../util/reactiveComponent";

const { store } = core.plant.addByRelativeDistance;

const positionColor = "red";

const onPossiblePositionClick = (position: LatLng) => () =>
  store.dispatch({ APBRD_possiblePositionClicked: position });

export const AddPlantByRelativeDistancePossiblePositions = reactiveComponent(
  store.pick("status", "selectedPosition", "possiblePositions", "fields"),
  ({ status, selectedPosition, possiblePositions, fields }) =>
    status === "visible" && selectedPosition !== undefined ? (
      <>
        <Circle
          center={selectedPosition}
          radius={fields.expectedDiameter / 2}
          fillColor={positionColor}
          fillOpacity={0.2}
          stroke={false}
        />
        <Circle
          center={selectedPosition}
          radius={fields.currentDiameter / 2}
          fillColor={positionColor}
          fillOpacity={1}
          stroke={false}
        />
      </>
    ) : possiblePositions.length === 2 ? (
      <>
        <Circle
          eventHandlers={{
            click: onPossiblePositionClick(possiblePositions[0]),
          }}
          center={possiblePositions[0]}
          radius={fields.expectedDiameter / 2}
          fillColor={positionColor}
          fillOpacity={0.2}
          stroke={false}
        />
        <Circle
          eventHandlers={{
            click: onPossiblePositionClick(possiblePositions[0]),
          }}
          center={possiblePositions[0]}
          radius={fields.currentDiameter / 2}
          fillColor={positionColor}
          fillOpacity={1}
          stroke={false}
        />
        <Circle
          eventHandlers={{
            click: onPossiblePositionClick(possiblePositions[1]),
          }}
          center={possiblePositions[1]}
          radius={fields.expectedDiameter / 2}
          fillColor={positionColor}
          fillOpacity={0.2}
          stroke={false}
        />
        <Circle
          eventHandlers={{
            click: onPossiblePositionClick(possiblePositions[1]),
          }}
          center={possiblePositions[1]}
          radius={fields.currentDiameter / 2}
          fillColor={positionColor}
          fillOpacity={1}
          stroke={false}
        />
      </>
    ) : null
);
