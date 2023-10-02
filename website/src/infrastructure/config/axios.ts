import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: process.env.BASE_RL,
    });
  }

  setAuthorization(token: string) {
    this.http.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}
