import {
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LatLngExpression } from "leaflet";
import { MapContainer, ScaleControl, TileLayer } from "react-leaflet";
import { core } from "../core";
import { AddPlantByRelativeDistancePossiblePositions } from "../plant/add/AddPlantByRelativeDistancePossiblePositions";
import { PlantMarkers } from "../plant/PlantMarkers";
import { reactiveComponent } from "../util/reactiveComponent";
import { ForestMapMenu } from "./ForestMapMenu";
import { Parcels } from "./Parcels";

const center: LatLngExpression = [48.6271, -2.4337];

const { store } = core.menu;

const onToogleMenuVisibilityButtonClick = store.action("toggleMenuVisibility");

export const ForestMap = reactiveComponent(store.pick("visible"), (menu) => (
  <>
    <div style={{ width: menu.visible ? "80vw" : "100vw", height: "100vh" }}>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
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
        <div className="leaflet-top leaflet-right">
          <div
            className="leaflet-control leaflet-bar"
            style={{ cursor: "pointer" }}
          >
            <a onClick={onToogleMenuVisibilityButtonClick}>
              <FontAwesomeIcon
                icon={menu.visible ? faAnglesRight : faAnglesLeft}
              />
            </a>
          </div>
        </div>
        <Parcels />
        <PlantMarkers />
      </MapContainer>
    </div>
    <div
      style={{
        display: menu.visible ? "inherit" : "none",
        width: "20vw",
        height: "100vh",
      }}
    >
      <AddPlantByRelativeDistancePossiblePositions />
      <ForestMapMenu />
    </div>
  </>
));
