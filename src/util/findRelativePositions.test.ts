import { describe, expect, it } from "vitest";
import { createPlantId, Plant, PlantName } from "../domain/Plant";
import { findRelativePositions } from "./findRelativePositions";

const sut = findRelativePositions;

describe(sut.name, () => {
  const nashi: Plant = {
    id: createPlantId(),
    name: "Nashi Shinseiki" as PlantName,
    position: { lat: 48.62715, lng: -2.434 },
    currentDiameter: 7,
    expectedDiameter: 8,
  };
  const pommierEst: Plant = {
    id: createPlantId(),
    name: "Chêne et pommier sauvage de l'est" as PlantName,
    position: { lat: 48.626972, lng: -2.433513 },
    currentDiameter: 7,
    expectedDiameter: 8,
  };
  it("finds intersections", () => {
    const result = sut(
      { position: nashi.position, distance: 21 },
      { position: pommierEst.position, distance: 21 }
    );
    expect(result).to.deep.equal([
      {
        lat: 48.627097752306184,
        lng: -2.4337257510646104,
      },
      {
        lat: 48.62702424769382,
        lng: -2.43378724893539,
      },
    ]);
  });
});
