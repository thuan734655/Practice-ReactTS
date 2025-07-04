import axios from "axios";

const axiosConfig = {
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
};

export const axiosClient = axios.create(axiosConfig);
