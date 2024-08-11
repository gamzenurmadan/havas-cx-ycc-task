import { useEffect } from "react";
import { checkSession } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export const useSessionCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const IntervalId = setInterval(() => {
            (
                async () => {
                    try {
                        const response = await checkSession();
                        if (response.status !== 200) {
                            handleLogout();
                        }
                    }catch(error){
                        console.error(error);
                        handleLogout();
                    }
                }
            )();
        }, 15 * 60 * 1000);

        return () => clearInterval(IntervalId);
    }, []);

    const handleLogout = () => {
        document.cookie = 'token=; Max-Age=0; path=/;';
        navigate('/login'); 
      };
};