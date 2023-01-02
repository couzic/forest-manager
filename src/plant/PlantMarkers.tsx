import { keys } from "ramda";
import { Circle, Tooltip } from "react-leaflet";
import { core } from "../core";
import { Plant, PlantStatus } from "../domain/Plant";
import { reactiveComponent } from "../util/reactiveComponent";

const plantColorByStatus: Record<PlantStatus, string> = {
  "to plant": "blue",
  "to sow": "lightblue",
  sowed: "lightgreen",
  "position requires verification": "red",
};

const getPlantColor = (plant: Plant) =>
  plant.status ? plantColorByStatus[plant.status] : "#89b717";

const { store } = core.plant;

const onPlantClick = (plant: Plant) => () =>
  store.dispatch({ plantClicked: plant });

export const PlantMarkers = reactiveComponent(
  store.pick("list"),
  ({ list }) => (
    <>
      {list.map((plant) => (
        <div key={plant.id}>
          {/* Expected */}
          <Circle
            eventHandlers={{ click: onPlantClick(plant) }}
            center={plant.position}
            radius={plant.expectedDiameter / 2}
            fillColor={getPlantColor(plant)}
            fillOpacity={0.2}
            stroke={false}
          >
            <Tooltip direction="top">
              <h3>{plant.name}</h3>
              <h4>Diamètre actuel: {plant.currentDiameter}m</h4>
              <h4>Diamètre attendu: {plant.expectedDiameter}m</h4>
            </Tooltip>
          </Circle>
          {/* Current */}
          <Circle
            eventHandlers={{ click: onPlantClick(plant) }}
            center={plant.position}
            radius={plant.currentDiameter / 2}
            fillColor={getPlantColor(plant)}
            fillOpacity={1}
            stroke={false}
          >
            <Tooltip direction="top">
              {keys(plant).map((key) => (
                <div key={key}>
                  {key}: {JSON.stringify(plant[key])}
                </div>
              ))}
            </Tooltip>
          </Circle>
          {/* Shadow */}
          {/* TODO */}
        </div>
      ))}
    </>
  )
);
