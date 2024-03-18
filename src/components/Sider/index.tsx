import React from "react";
import { Image, Layout, Menu, notification } from "antd";
import Link from "next/link";

import { Container } from "./styles";
import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard";
import { LogOutCircle } from "@styled-icons/boxicons-regular/LogOutCircle";
import { KeyMultiple } from "@styled-icons/fluentui-system-filled/KeyMultiple";
import { Shortcut } from "@styled-icons/material-outlined/Shortcut";
import { useAuth } from "@/infra/context/auth";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

interface ISiderAdmin {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SiderAdmin = ({ collapsed, setCollapsed }: ISiderAdmin) => {
  const { userLogout } = useAuth();
  const router = useRouter();
  return (
    <Container>
      <Sider
        collapsible
        width={250}
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          backgroundColor: "#FFFAFA",
        }}
      >
        <Link href="/admin">
          <Image
            src={collapsed ? "/images/favicon.jpg" : "/images/logo.png"}
            width={collapsed ? 60 : 180}
            className="logo pointer"
            alt="logo"
          />
        </Link>
        <Menu
          mode="inline"
          style={{
            color: "black",
          }}
          onSelect={({ key }) => {
            if (key === "/") {
              userLogout();
              notification.success({
                message: "Até mais! =)",
              });
              router.push("/");
            } else {
              router.push(key);
            }
          }}
          items={[
            {
              icon: <Dashboard />,
              label: "Dashboard",
              key: "/dashboard/",
            },
            {
              icon: <Shortcut />,
              label: "Atalhos",
              key: "/dashboard/atalhos",
            },
            {
              icon: <KeyMultiple />,
              label: "Senhas",
              key: "/dashboard/senhas",
            },
            {
              icon: <LogOutCircle />,
              label: "Sair",
              key: "/",
            },
          ]}
        />
      </Sider>
    </Container>
  );
};

export default SiderAdmin;
