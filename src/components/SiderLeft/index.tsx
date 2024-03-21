import React from "react";
import { Image, Layout, Menu, notification } from "antd";
import Link from "next/link";

import { Container } from "./styles";
import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard";

import { useAuth } from "@/infra/context/auth";
import { useRouter } from "next/navigation";
import { QuestionSquareFill } from "@styled-icons/bootstrap/QuestionSquareFill";
import { Users } from "@styled-icons/fa-solid/Users";
import { Tags } from "@styled-icons/fa-solid/Tags";
import { Business } from "@styled-icons/ionicons-solid/Business";

const { Sider } = Layout;

interface ISider {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SiderLeft = ({ collapsed }: ISider) => {
  const { userLogout } = useAuth();
  const router = useRouter();
  return (
    <Container>
      <Sider
        width={250}
        style={{
          overflow: "auto",
          height: "100vh",
          left: 0,
          backgroundColor: "#FFFAFA",
        }}
      >
        <Link href="/home">
          <Image
            preview={false}
            src={"/images/logo.svg"}
            width={130}
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
                message: "Usuario deslogado com sucesso!",
              });
              router.push("/");
            } else {
              router.push(key);
            }
          }}
          items={[
            {
              icon: <Dashboard size={25} />,
              label: "Home",
              key: "/home/",
            },
            {
              icon: <QuestionSquareFill size={25} />,
              label: "Dúvidas",
              key: "/home/duvidas",
            },
            {
              icon: <Tags size={25} />,
              label: "Categorias",
              key: "/home/categorias",
            },
            {
              icon: <Users size={25} />,
              label: "Usuários",
              key: "/home/usuarios",
            },
            {
              icon: <Business size={25} />,
              label: "Empresas",
              key: "/home/empresas",
            },
          ]}
        />
      </Sider>
    </Container>
  );
};

export default SiderLeft;
