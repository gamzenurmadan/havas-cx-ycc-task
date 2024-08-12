import axiosInstance from "../utils/axiosInstance";

export const registerUser = (email, userName, password) => {
    return axiosInstance.post("/users/register", {email, userName, password});
};

export const loginUser = (email, password) => {
    return axiosInstance.post("/users/verify", {email, password});
};

export const authLoginUser = (email, password, otp) => {
    return axiosInstance.post("/auth/login", {email, password, otp});
};

export const checkSession = () => {
    return axiosInstance.post('/auth/data', {}, { withCredentials: true });
  };

export const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; Secure; HttpOnly";
};

export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};

export const clearSession = () => {
    document.cookie = "token=; Max-Age=0; path=/; Secure; HttpOnly";
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
};