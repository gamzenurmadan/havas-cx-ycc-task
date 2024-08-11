import axios from "axios";

const axiosInstance = axios.create({
    baseURL: '/api',
    withCredentials:true, //to include cookies in requests
    headers: {
        "Content-Type":"application/json"
    }
});

export default axiosInstance;