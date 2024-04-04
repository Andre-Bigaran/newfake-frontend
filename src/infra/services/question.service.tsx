import { IService } from "@/interfaces/IService";
import api from "./api.service";
import { IQuestion } from "@/interfaces/IQuestion";

const create = async (data: IQuestion) => await api.post("questions", data);

const update = async (id: string, data: IQuestion) =>
  await api.put(`questions/${id}`, data);

const getAll = async (query: string = "") => await api.get(`questions${query}`);

const getById = async (id: string) => await api.get(`questions/${id}`);

const remove = async (id: string) => await api.delete(`questions/${id}`);

export const questionService: IService<IQuestion> = {
  create,
  update,
  getAll,
  getById,
  remove,
};
