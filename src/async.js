import axios from "axios";

export function fetchDataCallback(fn) {
  axios.get("http://www.dell-lee.com/react/api/demo.json").then((res) => {
    fn(res.data);
  });
}

export function fetchDataReturn() {
  return axios.get("http://www.dell-lee.com/react/api/demo.json");
}

export function fetchDataReturnError() {
  return axios.get("http://www.dell-lee.com/react/api/demo1.json");
}
