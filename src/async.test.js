import {
  fetchDataCallback,
  fetchDataReturn,
  fetchDataReturnError,
} from "./async";

test("fetchDataCallback to be {success: true}", (done) => {
  fetchDataCallback((data) => {
    expect(data).toEqual({ success: true });
    done();
  });
});

test("fetchDataReturn to be {success: true}", () => {
  return expect(fetchDataReturn()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

test("fetchDataReturn to be {success: true}", async () => {
  await expect(fetchDataReturn()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

test("fetchDataReturn to be {success: true}", async () => {
  const res = await fetchDataReturn();
  expect(res.data).toEqual({
    success: true,
  });
});

test("fetchDataReturnError to be {success: true}", () => {
  expect.assertions(1);
  return fetchDataReturnError().catch((err) => {
    expect(err.toString()).toMatch("404");
  });
});

test("fetchDataReturnError to be {success: true}", async () => {
  await expect(fetchDataReturnError()).rejects.toThrow();
});

test("fetchDataReturnError to be {success: true}", async () => {
  try {
    const res = await fetchDataReturnError();
  } catch (error) {
    expect(error.toString()).toMatch("404");
  }
});
