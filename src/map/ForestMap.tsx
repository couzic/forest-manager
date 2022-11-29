import { LatLngExpression } from "leaflet";
import { keys } from "ramda";
import {
  Circle,
  MapContainer,
  ScaleControl,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import { core } from "../core";
import { Plant } from "../domain/Plant";
import { AddPlantByRelativeDistancePossiblePositions } from "../plant/add/AddPlantByRelativeDistancePossiblePositions";
import { reactiveComponent } from "../util/reactiveComponent";
import { Parcels } from "./Parcels";

const center: LatLngExpression = [48.6271, -2.4337];

const plantColor = "#89b717";

const { store } = core.plant;

const onPlantClick = (plant: Plant) => () =>
  store.dispatch({ plantClicked: plant });

export const ForestMap = reactiveComponent(store.pick("list"), ({ list }) => (
  <MapContainer
    style={{ width: "80vw", height: "100vh" }}
    center={center}
    zoom={20}
    attributionControl={false}
  >
    <TileLayer
      // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      maxNativeZoom={19}
      maxZoom={25}
    />
    <ScaleControl imperial={false} position="bottomright" />
    <Parcels />
    {list.map((plant) => (
      <div key={plant.id}>
        {/* Expected */}
        <Circle
          eventHandlers={{ click: onPlantClick(plant) }}
          center={plant.position}
          radius={plant.expectedDiameter / 2}
          fillColor={plantColor}
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
          fillColor={plantColor}
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
    <AddPlantByRelativeDistancePossiblePositions />
  </MapContainer>
));
