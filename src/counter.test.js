import { Counter } from "./counter";

let counter = null;

beforeAll(() => {
  counter = new Counter();
});

beforeEach(() => {
  counter.number = 0;
});

test("addOne", () => {
  counter.addOne();
  expect(counter.number).toBe(1);
});

test("addOne", () => {
  counter.minusOne();
  expect(counter.number).toBe(-1);
});
