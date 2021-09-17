import { isCorrectImageSrc, isEmpty } from "../generics";

describe("Utils isEmpty Behaviour", () => {
  test("isEmpty works with object", () => {
    expect(isEmpty({})).toBe(true);
  });
  test("isEmpty works with string", () => {
    expect(isEmpty("")).toBe(true);
  });
  test("isEmpty works with undefined values", () => {
    expect(isEmpty()).toBe(true);
  });
});

describe("Utils isCorrectImageSrc Behaviour", () => {
  test("isCorrectImageSrc should be true when correct imageSrc", () => {
    expect(isCorrectImageSrc("https://picsum.photos/id/237/200/300")).toBe(
      true
    );
  });
  test("isCorrectImageSrc should be false when imageSrc is empty", () => {
    expect(isCorrectImageSrc("")).toBeFalsy();
  });
  test("isCorrectImageSrc should be false when there is no imageSrc", () => {
    expect(isCorrectImageSrc()).toBeFalsy();
  });
  test("isCorrectImageSrc should be false when imageSrc contains bad data", () => {
    expect(isCorrectImageSrc("N/A")).toBeFalsy();
  });
});
