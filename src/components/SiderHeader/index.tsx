import React from "react";
import { Dropdown, Layout, Menu, notification } from "antd";
import { CircleUser } from "@styled-icons/fa-solid/CircleUser";
import { LogOutCircle } from "@styled-icons/boxicons-regular/LogOutCircle";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";
import { useAuth } from "@/infra/context/auth";
import { useRouter } from "next/navigation";

const { Header } = Layout;

const SiderHeader: React.FC = () => {
  const { userLogout } = useAuth();
  const router = useRouter();

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "/") {
      userLogout();
      notification.success({
        message: "Usuário deslogado com sucesso!",
      });
      router.push("/");
    } else {
      router.push(key);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="/perfil/">
        <LinkExternal
          size={15}
          style={{ verticalAlign: "middle" }}
          className="uk-margin-small-right"
        />
        Visualizar Perfil
      </Menu.Item>
      <Menu.Item key="/">
        <LogOutCircle
          size={15}
          color={"red"}
          style={{ verticalAlign: "middle" }}
          className="uk-margin-small-right"
        />
        Sair
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "80px",
        backgroundColor: "#FFFAFA",
      }}
    >
      <Dropdown overlay={menu} placement="bottomRight" className="pointer">
        <span>
          <CircleUser size={25} style={{ verticalAlign: "middle" }} />
          &nbsp; Profile
        </span>
      </Dropdown>
    </Header>
  );
};

export default SiderHeader;
