import axios from "axios";



const githubApi = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_URL,
  
});


githubApi.interceptors.request.use(async config => {
  //const token = 'haushus'
  //githubApi.defaults.headers.authorization = `Bearer ${token}`;
  return config;
});

export default githubApi;