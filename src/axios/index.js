import Axios from "./config";
import jwt_decode from "jwt-decode";

export const setAuthHeader = token => {
  if (token) {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete Axios.defaults.headers.common["Authorization"];
  }
};

export const checkTokenAndReturn = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const tokenData = jwt_decode(token);
  const currentTime = Date.now() / 1000;

  if (tokenData.exp < currentTime) {
    localStorage.removeItem("token");
    setAuthHeader(null);
    return null;

  } else {
    if (token) setAuthHeader(token);
    return tokenData;
  }
};

export const register = async data => {
  try {
    let res = await Axios.post("/api/users/register", data);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const login = async data => {
  try {
    let res = await Axios.post("/api/users/login", data);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const getListings = async () => {
  try {
    let res = await Axios.get('/api/listings')
    return res
  } catch (error) {
    return error.response;
  }
}

export const createListing = async (data) => {
  try {
    let res = await Axios.post('/api/listings', data)
    return res
  } catch (error) {
    return error.response;
  }
}

export const getTravelers = async () => {
  try {
    let res = await Axios.get("/api/users/travelers");
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getUser = async (id) => {
  try {
    let res = await Axios.get(`/api/users/getUser/${id}`);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const updateUser = async (id, data) => {
  try {
    let res = await Axios.put(`/api/users/${id}`, data);
    return res;
  } catch (error) {
    return error.response;
  }
}; 

export const addSkill = async (id, data) => {
  try {
    let res = await Axios.put(`/api/users/addSkill/${id}`, {data})
    return res;
  } catch (error) {
    return error.response;
  }
}

export const removeSkill = async (id, data) => {
  try {
    let res = await Axios.put(`/api/users/removeSkill/${id}`, {data})
    return res;
  } catch (error) {
    return error.response;
  }
}


