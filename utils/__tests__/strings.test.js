import { fromCommasToArray } from "../strings";

describe("Strings utils functionality", () => {
  it("fromCommasToArray should return an array when no input is sent", () => {
    expect(fromCommasToArray()).toBeInstanceOf(Array);
  });

  it("fromCommasToArray should return an array when no input is sent", () => {
    expect(fromCommasToArray(Number)).toBeInstanceOf(Array);
  });

  it("When strings are separated by commas and spaces fromCommasToArray should return an array with all string data splitted and without initial spaces", () => {
    expect(fromCommasToArray("Nombre 1, Nombre 2")).toEqual([
      "Nombre 1",
      "Nombre 2",
    ]);
  });

  it("fromCommasToArray should return an array with all string data splitted", () => {
    expect(fromCommasToArray("Nombre 1,Nombre 2")).toEqual([
      "Nombre 1",
      "Nombre 2",
    ]);
  });
});
