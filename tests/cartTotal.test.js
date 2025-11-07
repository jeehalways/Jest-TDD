import { cartTotal } from "../src/cartTotal.js";

describe("cartTotal", () => {
  test("returns 0 for an empty array", () => {
    expect(cartTotal([])).toBe(0);
  });

  test("sums a single item", () => {
    expect(cartTotal([{ price: 10, quantity: 1 }])).toBe(10);
  });

  test("sums multiple items", () => {
    const items = [
      { price: 5, quantity: 2 },
      { price: 10, quantity: 1 },
    ];
    expect(cartTotal(items)).toBe(20);
  });
});
