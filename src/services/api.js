import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createUser = async (userData) => {
  try {
    const response = await api.post("/users/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCities = async () => {
  try {
    const response = await api.get("/city/allcities");
    console.log("apijs: ", response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};
