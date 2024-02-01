import { generateConfig, generateOhterConfig } from "./snapshot";

test("test config", () => {
  expect(generateConfig()).toMatchSnapshot();
});

test("test config", () => {
  expect(generateOhterConfig()).toMatchInlineSnapshot({
  time: expect.any(Date)
}, `
{
  "host": "localhost",
  "port": "30001ww",
  "time": Any<Date>,
}
`);
});
