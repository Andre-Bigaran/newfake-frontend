"use client";
import React, { useMemo, useState } from "react";
import ListQuestions from "./ListQuestions";
import FilterQuestions from "./FilterQuestions";
import PageContainer from "@/components/PageContainer";

import { PAGE_SIZE_DEFAULT } from "../../constants";
import { useQuestions } from "@/infra/hooks/useQuestions";

const Questions: React.FC = () => {
  const [page] = useState<number>(1);
  const { questions, questionsRefresh, questionsLoading, questionsTotal } =
    useQuestions({
      page: useMemo(() => page, [page]),
      limit: PAGE_SIZE_DEFAULT,
      filters: useMemo(() => "", []),
    });

  return (
    <PageContainer title="Duvidas">
      <FilterQuestions fetchData={questionsRefresh} />
      <ListQuestions
        questions={questions}
        questionsLoading={questionsLoading}
        questionsTotal={questionsTotal}
      />
    </PageContainer>
  );
};

export default Questions;
