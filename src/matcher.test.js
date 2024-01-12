import { sum } from "./matcher";

test("sum(3,7) to be 10", () => {
  expect(sum(3, 7)).toBe(10);
});
