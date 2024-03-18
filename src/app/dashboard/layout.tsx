"use client";

import { useAuth } from "@/infra/context/auth";
import { useEffect, useState } from "react";
import Container from "./styles";
import { Layout, Spin } from "antd";
import SiderAdmin from "@/components/Sider";

export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(true);
  const [ready, setReady] = useState(false);

  const { userRecovery } = useAuth();
  useEffect(() => {
    const start = async () => {
      await userRecovery();
      setReady(true);
    };
    start();
  }, [userRecovery]);

  if (!ready) {
    return (
      <div className="uk-width-1-1 uk-height-viewport uk-flex uk-flex-center uk-flex-middle">
        <Spin />
      </div>
    );
  }

  return (
    <Container>
      <Layout style={{ minHeight: "100vh" }}>
        <SiderAdmin collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout
          className="site-layout"
          style={{
            marginLeft: collapsed ? 80 : 250,
          }}
        >
          <Layout.Content>{children}</Layout.Content>
        </Layout>
      </Layout>
    </Container>
  );
}
