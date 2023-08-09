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

export const iniciarSesion = async (credenciales) => {
  try {
    console.log("CL en API Login: ", credenciales);
    const response = await api.post(`/users/login`, credenciales);
    const token = response.data.token;

    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

export const obtenerTokenLocalStorage = () => {
  return localStorage.getItem("token");
};

export const getDecodedPayload = async (token) => {
  try {
    const response = await api.post("/users/decodeToken", { token });
    return response.data.userInfo;
  } catch (error) {
    console.error("Error al decodificar payload en front: ", error);
    throw error;
  }
};

export const getCities = async () => {
  try {
    const response = await api.get("/city/allcities");
    console.log("apijs: ", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const crearProducto = async (producto) => {
  const token = obtenerTokenLocalStorage();
  try {
    const response = await api.post("/products/newproduct", producto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};

export const getFavs = async (userId) => {
  const token = obtenerTokenLocalStorage();
  try {
    const response = await api.get(`/fav/getFav/:${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener favoritos:", error);
    throw error;
  }
};

export const addProductToFavorites = async (userId, productId) => {
  const token = obtenerTokenLocalStorage();
  try {
    const response = await api.post(
      `/fav/addToFav/${userId}`,
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeProductFromFavorites = async (userId, productId) => {
  const token = obtenerTokenLocalStorage();
  console.log("token al eliminar fav: ", token);
  try {
    const response = await api.delete(`/fav/deleteFav/${userId}`, {
      data: { productId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
