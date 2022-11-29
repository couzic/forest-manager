import { PathOptions } from "leaflet";
import { GeoJSON } from "react-leaflet";

const style: PathOptions = {
  weight: 0.5,
  fill: false,
  color: "black",
  opacity: 0.2,
};

export const Parcels = () => (
  <>
    <GeoJSON
      style={style}
      data={
        {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              id: "220540000B1686",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-2.4344983, 48.6264659],
                    [-2.4342339, 48.6264236],
                    [-2.4338758, 48.6263719],
                    [-2.4335391, 48.6266841],
                    [-2.4342942, 48.6268235],
                    [-2.4344983, 48.6264659],
                  ],
                ],
              },
              properties: {
                id: "220540000B1686",
                commune: "22054",
                prefixe: "000",
                section: "B",
                numero: "1686",
                contenance: 2098,
                arpente: false,
                created: "2005-02-15",
                updated: "2017-09-18",
              },
            },
          ],
        } as any
      }
    />
    <GeoJSON
      style={style}
      data={
        {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              id: "220540000B1684",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-2.4342942, 48.6268235],
                    [-2.4335391, 48.6266841],
                    [-2.4331818, 48.6269873],
                    [-2.4334765, 48.6270369],
                    [-2.4341361, 48.6271586],
                    [-2.4341534, 48.6271079],
                    [-2.4341708, 48.627054],
                    [-2.4341858, 48.6270229],
                    [-2.4342942, 48.6268235],
                  ],
                ],
              },
              properties: {
                id: "220540000B1684",
                commune: "22054",
                prefixe: "000",
                section: "B",
                numero: "1684",
                contenance: 2536,
                arpente: false,
                created: "2005-02-15",
                updated: "2017-09-18",
              },
            },
          ],
        } as any
      }
    />
    <GeoJSON
      style={style}
      data={
        {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              id: "220540000B2014",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-2.4334765, 48.6270369],
                    [-2.4331818, 48.6269873],
                    [-2.4329307, 48.6271922],
                    [-2.4330788, 48.6273939],
                    [-2.4331187, 48.6274134],
                    [-2.4331769, 48.6274204],
                    [-2.4333159, 48.6274413],
                    [-2.4334765, 48.6270369],
                  ],
                ],
              },
              properties: {
                id: "220540000B2014",
                commune: "22054",
                prefixe: "000",
                section: "B",
                numero: "2014",
                contenance: 1311,
                arpente: false,
                created: "2008-11-14",
                updated: "2017-09-18",
              },
            },
          ],
        } as any
      }
    />
    <GeoJSON
      style={style}
      data={
        {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              id: "220540000B0876",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-2.4340343, 48.6275354],
                    [-2.4340536, 48.6274522],
                    [-2.4340655, 48.6273965],
                    [-2.4340824, 48.627315],
                    [-2.4341361, 48.6271586],
                    [-2.4334765, 48.6270369],
                    [-2.4333159, 48.6274413],
                    [-2.4336103, 48.6274884],
                    [-2.4337552, 48.6275048],
                    [-2.4340343, 48.6275354],
                  ],
                ],
              },
              properties: {
                id: "220540000B0876",
                commune: "22054",
                prefixe: "000",
                section: "B",
                numero: "876",
                contenance: 2235,
                arpente: false,
                created: "2005-02-15",
                updated: "2017-09-18",
              },
            },
          ],
        } as any
      }
    />
    <GeoJSON
      style={style}
      data={
        {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              id: "220540000B0635",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-2.4340343, 48.6275354],
                    [-2.4341734, 48.6275603],
                    [-2.4343518, 48.6275932],
                    [-2.434521, 48.6276231],
                    [-2.4346082, 48.627638],
                    [-2.4345374, 48.6274955],
                    [-2.4344932, 48.6274081],
                    [-2.434464, 48.6273379],
                    [-2.4344503, 48.6272954],
                    [-2.434443, 48.62726],
                    [-2.4344501, 48.6271532],
                    [-2.4344526, 48.6271015],
                    [-2.4344641, 48.6270562],
                    [-2.4345336, 48.6268916],
                    [-2.4345885, 48.6267576],
                    [-2.4346351, 48.6266618],
                    [-2.4346752, 48.6265838],
                    [-2.4347254, 48.6264997],
                    [-2.4344983, 48.6264659],
                    [-2.4342942, 48.6268235],
                    [-2.4341858, 48.6270229],
                    [-2.4341708, 48.627054],
                    [-2.4341534, 48.6271079],
                    [-2.4341361, 48.6271586],
                    [-2.4340824, 48.627315],
                    [-2.4340655, 48.6273965],
                    [-2.4340536, 48.6274522],
                    [-2.4340343, 48.6275354],
                  ],
                ],
              },
              properties: {
                id: "220540000B0635",
                commune: "22054",
                prefixe: "000",
                section: "B",
                numero: "635",
                contenance: 3000,
                arpente: false,
                created: "2005-02-15",
                updated: "2017-09-18",
              },
            },
          ],
        } as any
      }
    />
  </>
);
