import { formatDate } from "../src/dateFormatter.js";

describe("formatDate", () => {
  test("returns empty string for null/undefined input", () => {
    expect(formatDate(null)).toBe("");
    expect(formatDate(undefined)).toBe("");
  });

  test("correctly formats a given date object", () => {
    const date = new Date("2025-11-06");
    expect(formatDate(date)).toBe("06/11/2025");
  });

  test("correctly formats another date object (triangulation)", () => {
    const date = new Date("2000-01-15");
    expect(formatDate(date)).toBe("15/01/2000");
  });
});
