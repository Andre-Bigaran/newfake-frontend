"use client";

import React, { useCallback, useMemo, useState } from "react";

import { PAGE_SIZE_DEFAULT, TABLE_PAGINATION_DEFAULT } from "@/constants";

import { useUsers } from "@/infra/hooks/useUsers";

import { Table } from "antd";
import UsersColumn from "./columns";
import PageContainer from "@/components/PageContainer";

const ListUser: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const [editIsOpen, setEditIsOpen] = useState<boolean>(false);

  const { users, usersRefresh, usersLoading, usersTotal } = useUsers({
    page: useMemo(() => page, [page]),
    limit: PAGE_SIZE_DEFAULT,
    filters: useMemo(() => "", []),
  });

  return (
      <Table
        size="small"
        rowKey="id"
        dataSource={users}
        columns={UsersColumn(usersRefresh)}
        loading={usersLoading}
        pagination={{
          current: page,
          pageSize: PAGE_SIZE_DEFAULT,
          total: usersTotal,
          onChange: page => setPage(page),
          ...TABLE_PAGINATION_DEFAULT,
        }}
      />
  );
};

export default React.memo(ListUser);
