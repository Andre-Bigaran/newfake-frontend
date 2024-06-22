/* eslint @typescript-eslint/no-explicit-any: "off" */
import { Tag } from "antd";
import { ColumnGroupType } from "antd/es/table";
import { ColumnType } from "antd/lib/table";

type UserColumnFunction = (
  fetchData: () => void,
) => (ColumnGroupType<any> | ColumnType<any>)[];

const UserColumn: UserColumnFunction = (fetchData) => {
  const columns: (ColumnGroupType<any> | ColumnType<any>)[] = [
    {
      width: 20,
      title: "Ativo",
      dataIndex: "blocked",
      key: "blocked",
      render: (_, record) => (
        <Tag color={ "blue" }>
          {"Ativo"}
        </Tag>
      ),
    },
    {
      title: "Nome",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return columns;
};

export default UserColumn;
