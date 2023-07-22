import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTQ2NTE1NTUzNGIxNzAwNzM3YmY1NCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzM3NjQ3MzksImV4cCI6MTY3NDAyMzkzOX0.iBPfsDyhsev0sxouBty8uCn1gAXFxVjoRRUQcFez6M8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer${TOKEN}` },
});
