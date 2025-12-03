import axios from "axios";

export const coffeeComApi = axios.create({
  baseURL: "https://coffee-community-back.onrender.com",
});
