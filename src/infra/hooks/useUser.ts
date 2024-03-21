import { notification } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect, useCallback } from "react";
import { IUserCreated } from "@/interfaces/IUser";
import { userService } from "../services/user.service";

interface UserResponse {
  user: IUserCreated;
  userLoading: boolean;
  userRefresh: () => void;
  userTotal: number;
}

interface ApiResponse {
  user: IUserCreated;
}

export const useUser = (id: string): UserResponse => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);

    userService
      .getById(id)
      .then((res: AxiosResponse<ApiResponse>) => setData(res.data.user))
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
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id, fetchData]);

  return {
    user: data,
    userRefresh: fetchData,
    userLoading: loading,
  };
};
