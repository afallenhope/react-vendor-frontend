import { useNavigate } from "react-router-dom";
import { User } from "../types";
import { useEffect } from "react";
import jwtDecode from 'jwt-decode';

export interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider = ({children }: AuthProviderProps) => {
    const [user, setUser] = React.useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('fks.token');
        if (token) {
            const decoded = jwtDecode<User>(token);
            setUser(decoded);
        }
    }, []);

    const login = async (user: LoginDto): Promise<boolean> => {
        try {
            // localStorage.setItem('fks.token', access_token); // don't store tokens in localStorage... use httpOnly cookies. this was PURPOSEFULLY vulnerable
            Promise.resolve();
        } catch(error: any){
            setUser(null);
            localStorage.removeItem('fks.token');
            Promise.reject(false);
        }
    };
};
