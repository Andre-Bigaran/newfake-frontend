import { Avatar, List } from "antd";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Container from "./styles";
import { PAGE_SIZE_DEFAULT } from "../../../constants";

const ListQuestions: React.FC = ({
  questions,
  questionsLoading,
  questionsTotal,
}) => {
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  const handleTitleClick = (id: string) => {
    // Aqui você pode redirecionar para a página desejada com o ID da pergunta
    router.push(`/home/duvidas/${id}/visualizar`);
  };

  return (
    <Container>
      <div className="container-list">
        <List
          itemLayout="horizontal"
          dataSource={questions}
          loading={questionsLoading}
          pagination={{
            total: questionsTotal,
            defaultPageSize: PAGE_SIZE_DEFAULT,
            current: page,
            onChange: newPage => setPage(newPage),
          }}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <a
                    onClick={() => handleTitleClick(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {item?.attributes?.title}
                  </a>
                }
                description={item?.attributes?.description}
              />
            </List.Item>
          )}
        />
      </div>
    </Container>
  );
};

export default ListQuestions;
