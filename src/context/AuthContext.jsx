import { createContext, useState, useEffect, useContext } from "react";
import { checkSession, clearSession } from "../api/authApi";
import PropTypes from "prop-types";
import { redirect } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const validateSession = async () => {
            try {
                const response = await checkSession();
                if (response.data && response.data.isAuthenticated) {
                    setIsAuthenticated(true);
                } else {
                    clearSession();
                    redirect("/login");
                }
            } catch (error) {
                clearSession();
                redirect("/login");
            } finally {
                setLoading(false);
            }
        };

        validateSession();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export const useAuth = () => useContext(AuthContext);
