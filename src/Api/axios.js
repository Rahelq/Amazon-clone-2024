import axios from "axios";

export const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-edd82/us-central1/api",

  //deployed version of firebase function on render.com
  baseURL: "https://amazon-api-deploy-7bz1.onrender.com/",

});