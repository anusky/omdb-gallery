import { isEmpty } from "../generics";

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
