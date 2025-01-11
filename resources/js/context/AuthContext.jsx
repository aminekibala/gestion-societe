import React, { createContext, useState } from "react";
import axios from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const response = await axios.post("/login", { email, password });
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
    };

    const logout = async () => {
        await axios.post("/logout");
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
