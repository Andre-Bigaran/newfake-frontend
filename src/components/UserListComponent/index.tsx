// eslint-disable-next-line no-empty-pattern
"use client";
// src/components/UserListComponent/index.tsx
import React, { useState } from "react";
import { Image, Row, Tag, Pagination, Input, Select, Card } from "antd";

const { Search } = Input;
const { Option } = Select;

const users = [
  {
    id: 1,
    name: "João",
    role: "Usuário",
    photo: "url_da_foto_joao.jpg",
    tags: ["tag1", "tag2"],
  },

  // Usuários Fakes para teste
  {
    id: 2,
    name: "Maria",
    role: "Moderador",
    photo: "url_da_foto_maria.jpg",
    tags: ["tag3", "tag4", "tag5"],
  },
];

const usersPerPage = 15;

const UserListComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const filteredUsers = users
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(user => (filter === "" ? true : user.role === filter));

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
    setCurrentPage(1);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <div style={{ marginRight: "auto", marginBottom: "16px" }}>
          <Search
            placeholder="Buscar usuários"
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
        </div>
        <div style={{ marginLeft: "auto", marginBottom: "16px" }}>
          <Select
            defaultValue=""
            style={{ width: 120 }}
            onChange={handleFilterChange}
          >
            <Option value="">Todos</Option>
            <Option value="Usuário">Usuários</Option>
            <Option value="Moderador">Moderadores</Option>
          </Select>
        </div>
      </Row>
      <Row gutter={[16, 16]}>
        {currentUsers.map(user => (
          // eslint-disable-next-line react/jsx-key
          <Card style={{ borderRadius: "16px", marginRight: "8px" }}>
            <div key={user.id}>
              <Image
                width={200}
                height={100}
                src={user.photo}
                alt={`Foto de ${user.name}`}
                fallback="url_da_imagem_de_erro.png"
              />
              <p>{user.name}</p>
              <p>{user.role}</p>
              <div>
                {user.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </Row>
      {typeof window !== "undefined" && filteredUsers.length > usersPerPage && (
        <Pagination
          current={currentPage}
          total={filteredUsers.length}
          pageSize={usersPerPage}
          onChange={handleChangePage}
        />
      )}
    </div>
  );
};

export default UserListComponent;
