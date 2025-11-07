import { isValidPassword } from "../src/passwordValidator.js";

describe("isValidPassword", () => {
  test("returns false if password is shorter than 8 characters", () => {
    expect(isValidPassword("abc123")).toBe(false);
  });

  test("returns false if password does not contain a number", () => {
    expect(isValidPassword("abcdefgh")).toBe(false);
  });

  test("returns true if password is at least 8 chars and contains a number", () => {
    expect(isValidPassword("abc12345")).toBe(true);
  });
});
