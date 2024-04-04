import { Button, Modal, Select, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useCallback, useState } from "react";

import { questionService } from "../../../infra/services/question.service";

const FilterQuestions: React.FC = ({ fetchData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<>({
    title: "",
    description: "",
    tag: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const submitData = useCallback(() => {
    if (loading) return false;
    setLoading(true);

    questionService
      .create({
        data: {
          ...data,
        },
      })
      .then(() => {
        fetchData();
        setIsOpen(false);
        notification.success({
          message: "Registro criado com sucesso",
        });
        setData({
          title: "",
          description: "",
          tag: "",
        });
      })
      .catch(err => {
        if (err && err?.response?.data) {
          notification.error({
            message: err.response.data.message,
          });
        } else {
          notification.error({
            message: "Alguma coisa deu errado na hora de criar o registro",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loading, data]);

  return (
    <>
      <div className="uk-align-right">
        <Button type="primary" onClick={() => setIsOpen(true)}>
          Perguntar
        </Button>
      </div>

      <Modal
        confirmLoading={loading}
        title="Realizar pergunta"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onOk={() => {
          submitData();
        }}
      >
        <div className="uk-margin">
          <label>Titulo</label>
          <input
            type="text"
            className="uk-input"
            value={data?.title || ""}
            onChange={e => setData({ ...data, title: e.target.value })}
            required
          />
        </div>
        <div className="uk-margin">
          <label>Descrição</label>
          <TextArea
            showCount
            maxLength={100}
            value={data?.description}
            onChange={e => setData({ ...data, description: e.target.value })}
            placeholder="disable resize"
            style={{ height: 120, resize: "none" }}
          />
        </div>

        <div className="uk-margin">
          <label>Tag</label>
          <input
            type="text"
            className="uk-input"
            value={data?.tag || ""}
            onChange={e => setData({ ...data, tag: e.target.value })}
            required
          />
        </div>
      </Modal>
    </>
  );
};

export default FilterQuestions;
