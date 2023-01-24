import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "c2a645e618217ce4c8ee10b75d1a77fb",
    language: "ko-KR",
  },
});
export default instance;
