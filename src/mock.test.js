import axios from "axios";
import { createObject, getData, runCallback } from "./mock";

test("callback function to be called", () => {
  const fn = jest.fn();
  // mock 自定义函数
  const fn1 = jest.fn(() => {
    return "value";
  });

  const fn2 = jest.fn();

  const fn3 = jest.fn();
  fn3.mockImplementation(() => {
    console.log("mockImplementation");
    return "abc";
  });
  const fn4 = jest.fn();
  fn4.mockImplementationOnce(() => {
    console.log("mockImplementationOnce");
    return "abc";
  });
  const fn5 = jest.fn();
  fn5.mockReturnThis();
  // mock 返回值
  fn2.mockReturnValueOnce("valueOnce");
  runCallback(fn);
  runCallback(fn);

  // 测试 fn 是否被调
  expect(fn).toBeCalled();

  // 测试 fn 被调次数
  expect(fn.mock.calls.length).toBe(2);

  // 测试 fn 参数
  expect(fn.mock.calls[0]).toEqual(["abc"]);

  // 同等与上面
  expect(fn).tobeCalledWith("abc");
  runCallback(fn1);

  // 测试 fn 返回值
  expect(fn1.mock.results[0].value).toBe("value");

  runCallback(fn2);
  runCallback(fn2);

  // 测试 fn 返回值一次
  expect(fn2.mock.results[0].value).toBe("valueOnce");
});

test("测试 createObject", () => {
  const fn = jest.fn();
  createObject(fn);
  console.log(fn.mock); // 有 instances
});

jest.mock("axios");

test.only("测试模拟 axios 返回值", async () => {
  axios.get.mockResolvedValue({ data: { success: true } });
  const res = await getData();
  expect(res.data).toEqual({ success: true });
});
