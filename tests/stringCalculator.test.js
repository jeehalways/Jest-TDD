import { stringCalculator } from "../src/stringCalculator.js";

describe("stringCalculator", () => {
  test("returns 0 for empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  test("returns the number for a single input", () => {
    expect(stringCalculator("5")).toBe(5);
  });

  test("returns the sum of two comma-separated numbers", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });
});
