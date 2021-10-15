import axios from "axios";

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API_URL,
});


serverApi.interceptors.request.use(async config => {

  return config;
});

export default serverApi;