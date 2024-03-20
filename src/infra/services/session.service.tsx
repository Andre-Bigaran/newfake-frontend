import { ILogin } from "@/interfaces/ILogin";
import api from "./api.service";

const login = async ({ identifier, password }: ILogin) => {
  return await api.post("/auth/local", {
    identifier,
    password,
  });
};

export const sessionService = { login };
