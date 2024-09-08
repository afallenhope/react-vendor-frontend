import { User } from "../types";

export interface UserAuthContext {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}