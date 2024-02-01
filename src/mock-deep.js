import axios from "axios";

export function fetchData() {
  return axios.get("/").then((res) => res.data);
}

export function getNumber() {
  return 123;
}
