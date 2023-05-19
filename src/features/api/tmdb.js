import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      Accept: "application/json"
    },
    params: {
      api_key: 'f864c444928645f66814d9fbaba37ee6'
    }
  })