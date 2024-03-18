import { ILogin } from "@/interfaces/ILogin";
import api from "./api.service";

const login = async ({ login, password }: ILogin) => {
  return await api.post("/login", {
    login,
    password,
  });
};

export const sessionService = { login };
