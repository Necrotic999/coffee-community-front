import axios from "axios";

export const coffeeComApi = axios.create({
  baseURL: "http://localhost:8000",
});
