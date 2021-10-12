import axios from "axios";

const api = axios.create({
  baseURL: "https://github.com",
});


api.interceptors.request.use(async config => {
  
  /*const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }*/

  return config;
});

export default api;