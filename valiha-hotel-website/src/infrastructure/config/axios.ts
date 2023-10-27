import axios from "axios";

const baseURL = process.env.BASE_URL;

const http = axios.create({
  baseURL,
});

export default http;
