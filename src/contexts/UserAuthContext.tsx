import React from "react";
import { UserAuthContext } from "../interfaces/UserAuthContext";

export const AuthContext = React.createContext<UserAuthContext | null>(null);
export const useAuth = () => {
    const context = React.useContext(AuthContext);
}: