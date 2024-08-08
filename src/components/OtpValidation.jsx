import axios from "axios";
import { useState } from "react";
import Otp from "./Otp";

export default function OtpValidation(){

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleOtpSubmit = async (otp) => {
        try{
            const response = await axios.post('http://199.247.17.44:3001/auth/login', {otp});
            const token = response.data;
            if (token) {
                document.cookie = `token=${token}; HttpOnly; SameSite=Strict`; //
                setIsAuthenticated(true);
            }
        }catch (error){
            console.error("OTP Validation failed.", error);
            alert("Invalid OTP");
        }
    };

    if(isAuthenticated){
        return alert("Authenticated");
    }

    return (
        <Otp onSubmit={handleOtpSubmit} />
    )
}