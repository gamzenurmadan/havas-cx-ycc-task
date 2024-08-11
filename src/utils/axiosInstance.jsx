import axios from "axios";

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_HAVAS_API_BASE_URL,
    withCredentials:true, //to include cookies in requests
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type":"application/json"
    }
});

export default axiosInstance;
