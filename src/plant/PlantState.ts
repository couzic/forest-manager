import { createPlantId, Plant, PlantId, PlantName } from "../domain/Plant";
import {
  addPlantByRelativeDistanceFormInitialState,
  AddPlantByRelativeDistanceFormState,
} from "./add/AddPlantByRelativeDistanceFormState";

export interface PlantState {
  list: Plant[];
  byRelativeDistance: {
    a: { plantId?: PlantId; distance?: number };
    b: { plantId?: PlantId; distance?: number };
  } & Partial<Pick<Plant, "name" | "currentDiameter" | "expectedDiameter">>;
  addByRelativeDistanceForm: AddPlantByRelativeDistanceFormState;
}

export const initialPlantState: PlantState = {
  list: [
    {
      id: createPlantId(),
      name: "Grand chêne du nord" as PlantName,
      position: { lat: 48.6274, lng: -2.4334 },
      currentDiameter: 10,
      expectedDiameter: 12,
    },
    {
      id: createPlantId(),
      name: "Chêne et pommier sauvage de l'est" as PlantName,
      position: { lat: 48.626972, lng: -2.433513 },
      currentDiameter: 7,
      expectedDiameter: 8,
    },
    {
      id: createPlantId(),
      name: "Kaki Fuyu" as PlantName,
      position: {
        lat: 48.62742334944425,
        lng: -2.434048453559474,
      },
      currentDiameter: 1,
      expectedDiameter: 6,
    },
    {
      id: createPlantId(),
      name: `Cerisier "Annie" + Framboisier "Zeva"` as PlantName,
      position: {
        lat: 48.627256723297435,
        lng: -2.4338964181936027,
      },
      currentDiameter: 1,
      expectedDiameter: 8,
    },
    {
      id: createPlantId(),
      name: "Nashi Shinseiki" as PlantName,
      currentDiameter: 1.5,
      expectedDiameter: 6,
      position: { lat: 48.627101086349306, lng: -2.4337483117501892 },
    },
    {
      id: createPlantId(),
      name: "Poirier Williams" as PlantName,
      currentDiameter: 1.5,
      expectedDiameter: 6,
      position: { lat: 48.627009013404354, lng: -2.433746954259938 },
    },
    {
      id: createPlantId(),
      name: "Duchesse d'Angoulème" as PlantName,
      currentDiameter: 1.5,
      expectedDiameter: 6,
      position: { lat: 48.62700828197123, lng: -2.4336626965159263 },
    },
    {
      id: createPlantId(),
      name: "Nashi Hosui" as PlantName,
      currentDiameter: 1.5,
      expectedDiameter: 6,
      position: { lat: 48.62710305082307, lng: -2.4336729395525847 },
    },
    {
      id: createPlantId(),
      name: "Poirier Conférence" as PlantName,
      currentDiameter: 1.5,
      expectedDiameter: 6,
      position: { lat: 48.62706040842415, lng: -2.4336276448684284 },
    },
    {
      id: createPlantId(),
      name: "Poirier Comtesse de Paris" as PlantName,
      currentDiameter: 1.5,
      expectedDiameter: 6,
      position: { lat: 48.62719729228441, lng: -2.433632274917125 },
    },
    {
      id: createPlantId(),
      name: "Poirier Louise Bonne d'Avranche" as PlantName,
      currentDiameter: 1.5,
      expectedDiameter: 6,
      position: { lat: 48.62719352374191, lng: -2.4335543340362684 },
    },
    {
      id: createPlantId(),
      name: "Comice (nord)" as PlantName,
      currentDiameter: 1.5,
      expectedDiameter: 6,
      position: { lat: 48.627243097931256, lng: -2.43360425740533 },
    },
    {
      id: createPlantId(),
      name: "Beurré Hardy" as PlantName,
      currentDiameter: 1.5,
      expectedDiameter: 6,
      position: { lat: 48.627286888188564, lng: -2.433475564240781 },
    },
    {
      id: createPlantId(),
      name: "Comice (sud)" as PlantName,
      currentDiameter: 1.5,
      expectedDiameter: 6,
      position: { lat: 48.62696388860382, lng: -2.433699918899456 },
    },
    {
      id: createPlantId(),
      name: "Caseille" as PlantName,
      position: {
        lat: 48.62704779930266,
        lng: -2.4338384883834574,
      },
      currentDiameter: 0.5,
      expectedDiameter: 2,
    },
    {
      id: createPlantId(),
      name: "Figuier Goutte d'Or (sud) + Framboisier Fallgold" as PlantName,
      position: {
        lat: 48.62705421334569,
        lng: -2.433793824264601,
      },
      currentDiameter: 1,
      expectedDiameter: 6,
    },
    {
      id: createPlantId(),
      name: "Prunier Myrobolan (entrée friche) (A PLANTER & VERIFIER POSITION)" as PlantName,
      position: {
        lat: 48.62724291047721,
        lng: -2.4335227108136057,
      },
      currentDiameter: 1,
      expectedDiameter: 6,
    },
    {
      id: createPlantId(),
      name: "Reine-Claude Dorée (est)" as PlantName,
      currentDiameter: 2,
      expectedDiameter: 8,
      position: { lat: 48.62713942068693, lng: -2.4335986863959245 },
    },
    {
      id: createPlantId(),
      name: "Prunier Belle de Louvain" as PlantName,
      currentDiameter: 2,
      expectedDiameter: 8,
      position: { lat: 48.62716099411383, lng: -2.433713268110471 },
    },
    {
      id: createPlantId(),
      name: "Reine-Claude de Bavay" as PlantName,
      currentDiameter: 2,
      expectedDiameter: 8,
      position: { lat: 48.62719061465219, lng: -2.4338115856661777 },
    },
    {
      id: createPlantId(),
      name: "Prunier Victoria" as PlantName,
      currentDiameter: 2,
      expectedDiameter: 8,
      position: { lat: 48.627170497358016, lng: -2.4339166754123367 },
    },
    {
      id: createPlantId(),
      name: "Reine-Claude Dorée (ouest)" as PlantName,
      currentDiameter: 2,
      expectedDiameter: 8,
      position: { lat: 48.627218963500724, lng: -2.433994173642041 },
    },
    {
      id: createPlantId(),
      name: "Abricotier (entrée friche) (A SEMER & VERIFIER POSITION)" as PlantName,
      position: {
        lat: 48.627120900722204,
        lng: -2.4338379900968623,
      },
      currentDiameter: 1,
      expectedDiameter: 8,
    },
    {
      id: createPlantId(),
      name: "Noyer Parisienne" as PlantName,
      currentDiameter: 2,
      expectedDiameter: 12,
      position: { lat: 48.62724892834601, lng: -2.4337201266173647 },
    },
    {
      id: createPlantId(),
      name: "Noyer Franquette" as PlantName,
      currentDiameter: 2,
      expectedDiameter: 15,
      position: { lat: 48.62734262671858, lng: -2.433593206908922 },
    },
    {
      id: createPlantId(),
      name: "Noyer Meylanaise" as PlantName,
      currentDiameter: 2,
      expectedDiameter: 15,
      position: { lat: 48.62736222375448, lng: -2.4337928460856584 },
    },
    {
      id: createPlantId(),
      name: "Céanothe rampant" as PlantName,
      position: { lat: 48.62725899011382, lng: -2.4338143178585607 },
      currentDiameter: 1,
      expectedDiameter: 4,
    },

    {
      id: createPlantId(),
      name: "Figuier Noir de Bellone" as PlantName,
      currentDiameter: 1,
      expectedDiameter: 6,
      position: { lat: 48.627120271403946, lng: -2.4339706789782043 },
    },
    {
      id: createPlantId(),
      name: "Pommier Calville Blanche" as PlantName,
      currentDiameter: 1,
      expectedDiameter: 5,
      position: { lat: 48.62707617426494, lng: -2.433951429162019 },
    },
    {
      id: createPlantId(),
      name: "Pommier Reinette d'Armorique" as PlantName,
      position: {
        lat: 48.62703877023983,
        lng: -2.433913586866124,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    {
      id: createPlantId(),
      name: "Pommier Belle de Boskoop" as PlantName,
      position: {
        lat: 48.62699667292809,
        lng: -2.433947234252461,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    // DEAD
    // {
    //   id: createPlantId(),
    //   name: "Pommier Reinette Clochard" as PlantName,
    //   position: {
    //     lat: 48.62696006731648,
    //     lng: -2.4338425976380234,
    //   },
    //   currentDiameter: 1,
    //   expectedDiameter: 5,
    // },
    {
      id: createPlantId(),
      name: "Pommier Winter Banana" as PlantName,
      position: {
        lat: 48.62695842309307,
        lng: -2.4339092096748107,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    {
      id: createPlantId(),
      name: "Pommier Idared" as PlantName,
      position: {
        lat: 48.62696230934577,
        lng: -2.4337787110944156,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    {
      id: createPlantId(),
      name: "Pommier Reinette du Canada Blanche" as PlantName,
      position: {
        lat: 48.62692106605798,
        lng: -2.433808891431909,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    // DEAD
    // {
    //   id: createPlantId(),
    //   name: "Pommier Jonagold" as PlantName,
    //   position: {
    //     lat: 48.62692285007371,
    //     lng: -2.4337462480414307,
    //   },
    //   currentDiameter: 1,
    //   expectedDiameter: 5,
    // },
    {
      id: createPlantId(),
      name: "Pommier Reine des Reinettes" as PlantName,
      position: {
        lat: 48.62688110270355,
        lng: -2.4337764102636004,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    {
      id: createPlantId(),
      name: "Pommier Chailleux (Drap d'or)" as PlantName,
      position: {
        lat: 48.62684240949535,
        lng: -2.4337405813639412,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    {
      id: createPlantId(),
      name: "Pommier Gala" as PlantName,
      position: {
        lat: 48.626882126520634,
        lng: -2.4338427605879254,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    {
      id: createPlantId(),
      name: "Figuier Goutte d'Or (nord) + Framboisier Fallgold" as PlantName,
      position: {
        lat: 48.62728831604013,
        lng: -2.4338011455951922,
      },
      currentDiameter: 1,
      expectedDiameter: 6,
    },
    {
      id: createPlantId(),
      name: "Mirabellier (ouest) (A PLANTER & VERIFIER POSITION)" as PlantName,
      position: {
        lat: 48.62716432476134,
        lng: -2.434004522879002,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    {
      id: createPlantId(),
      name: `Mirabellier (est) + Framboisier "Malling Promise"` as PlantName,
      position: {
        lat: 48.62709013337869,
        lng: -2.433573126366655,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    {
      id: createPlantId(),
      name: 'Mirabellier (sud) + Framboisier "Malling Promise"' as PlantName,
      position: {
        lat: 48.62706913734805,
        lng: -2.433862153982798,
      },
      currentDiameter: 1,
      expectedDiameter: 5,
    },
    {
      id: createPlantId(),
      name: 'Mûre-Framboise "Tayberry" (nord)' as PlantName,
      position: {
        lat: 48.62716731931881,
        lng: -2.4336448059796263,
      },
      currentDiameter: 1,
      expectedDiameter: 2,
    },
    {
      id: createPlantId(),
      name: 'Mûre-Framboise "Tayberry" (sud)' as PlantName,
      position: {
        lat: 48.627154900604815,
        lng: -2.4336507433488506,
      },
      currentDiameter: 1,
      expectedDiameter: 2,
    },
  ],
  byRelativeDistance: { a: {}, b: {} },
  addByRelativeDistanceForm: addPlantByRelativeDistanceFormInitialState,
};
