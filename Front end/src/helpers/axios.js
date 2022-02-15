import axios from "axios";
import { api } from "../urlConfig";
const token1=window.localStorage.getItem("token")
const token2 = "Bearer ".concat(token1 );
const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    'authorization': token2,
  },
});
export default axiosInstance;
