import axiosInstance from "../utils/axiosInstance";

export const registerUser = (email, userName, password) => {
    return axiosInstance.post("/users/register", {email, userName, password});
};

export const verifyUser = (email, password) => {
    return axiosInstance.post("/users/verify", {email, password});
};

export const authLoginUser = (email, password, otp) => {
    return axiosInstance.post("/auth/login", {email, password, otp});
};

export const getUserData = (token) => {
    return axiosInstance.post("/auth/data", null, {
        headers: {Authorization: `Bearer ${token}`}
    });
};