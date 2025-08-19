import axios from "axios";

const API_KEY = "AIzaSyBcKEIKPP7FpQCqb3Gm3qHxsLYKAD_ZyIU";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const youtube = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export default youtube;