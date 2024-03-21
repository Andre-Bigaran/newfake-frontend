"use client";

import { useCallback, useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { notification } from "antd";
import { IUserCreated } from "@/interfaces/IUser";
import { userService } from "../services/user.service";

interface UsersProps {
  page?: number;
  limit?: number;
  filters?: string;
  orderers?: string;
}

interface UsersResponse {
  users: IUserCreated[] | [];
  usersLoading: boolean;
  usersRefresh: () => void;
  usersTotal: number;
}

export const useUsers = ({
  page = 1,
  limit = 10,
  filters = "",
  orderers = "&orderBy=created_at&orderType=DESC",
}: UsersProps): UsersResponse => {
  const [data, setData] = useState<IUserCreated[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(() => {
    if (loading) return;
    setLoading(true);
    const query = `?pagination[page]=${page}&pagination[pageSize]=${limit}${filters}${orderers}`;
    userService
      .getAll(query)
      .then((res: AxiosResponse) => {
        setData(res?.data);
        setTotal(res?.data?.length);
      })
      .catch((err: AxiosError<{ message: string }>) => {
        if (
          !!err?.response &&
          !!err?.response?.data &&
          !!err?.response?.data?.message
        ) {
          notification.error({
            message: "Error",
            description: err.response?.data?.message,
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, limit, filters, orderers, loading]);

  useEffect(() => {
    fetchData();
  }, [page, filters]);

  return {
    users: data,
    usersLoading: loading,
    usersRefresh: fetchData,
    usersTotal: total,
  };
};
