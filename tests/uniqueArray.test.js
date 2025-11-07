import { uniqueArray } from "../src/uniqueArray.js";

describe("uniqueArray", () => {
  test("returns the same array if no duplicates exist", () => {
    expect(uniqueArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("removes duplicates", () => {
    expect(uniqueArray([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
  });

  test("handles multiple identical values", () => {
    expect(uniqueArray([5, 5, 5])).toEqual([5]);
  });
});
