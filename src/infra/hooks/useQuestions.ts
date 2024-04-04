"use client";

import { useCallback, useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { notification } from "antd";
import { IQuestionCreated } from "@/interfaces/IQuestion";
import { questionService } from "../services/question.service";

interface QuestionsProps {
  page?: number;
  limit?: number;
  filters?: string;
  orderers?: string;
}

interface QuestionsResponse {
  questions: IQuestionCreated[] | [];
  questionsLoading: boolean;
  questionsRefresh: () => void;
  questionsTotal: number;
}

export const useQuestions = ({
  page = 1,
  limit = 10,
  filters = "",
  orderers = "&orderBy=created_at&orderType=DESC",
}: QuestionsProps): QuestionsResponse => {
  const [data, setData] = useState<IQuestionCreated[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(() => {
    if (loading) return;
    setLoading(true);
    const query = `?pagination[page]=${page}&pagination[pageSize]=${limit}${filters}${orderers}&populate=*`;
    questionService
      .getAll(query)
      .then((res: AxiosResponse) => {
        setData(res?.data?.data);
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
    questions: data,
    questionsLoading: loading,
    questionsRefresh: fetchData,
    questionsTotal: total,
  };
};
