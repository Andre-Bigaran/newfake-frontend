import { IService } from "@/interfaces/IService";
import api from "./api.service";
import { IUser } from "@/interfaces/IUser";

const create = async (data: IUser) => await api.post("users", data);

const update = async (id: string, data: IUser) =>
  await api.put(`users/${id}`, data);

const getAll = async (query: string = "") => await api.get(`users${query}`);

const getById = async (id: string) => await api.get(`users/${id}`);

const remove = async (id: string) => await api.delete(`users/${id}`);

export const userService: IService<IUser> = {
  create,
  update,
  getAll,
  getById,
  remove,
};
