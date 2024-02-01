jest.mock("./mock-deep.js");

import { fetchData } from "./mock-deep";
const { getNumber } = jest.requireActual("./mock-deep");

test("axios test __mocks__", async () => {
  const res = await fetchData();
  expect(eval(res)).toBe("abc");
});

// 或者

// import axios from "axios";
// jest.mock("axios");

// test("axios test", () => {
//   axios.get.mockResolvedValue({ data: '(function(){ return "abc" })()' });
//   return fetchData().then((data) => {
//     expect(eval(data)).toBe("abc");
//   });
// });

test("test getNumber", () => {
  expect(getNumber()).toBe(123);
});
