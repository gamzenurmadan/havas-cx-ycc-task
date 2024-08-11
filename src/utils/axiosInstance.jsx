import axios from "axios";

const axiosInstance = axios.create({
    baseURL:import.meta.env.HAVAS_API_BASE_URL,
    withCredentials:true, //to include cookies in requests
    headers: {
        "Content-Type":"application/json"
    }
});

export default axiosInstance;
