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
    setAuthHeader(token);
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