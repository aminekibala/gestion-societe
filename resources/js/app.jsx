import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Auth/Login";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;

