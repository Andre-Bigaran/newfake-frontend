import React from "react";
import { Dropdown, Image, Layout, Menu, notification } from "antd";
import { CircleUser } from "@styled-icons/fa-solid/CircleUser";
import { LogOutCircle } from "@styled-icons/boxicons-regular/LogOutCircle";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";
import { useAuth } from "@/infra/context/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const { Header } = Layout;

const SiderHeader: React.FC = () => {
  const { user, userLogout } = useAuth();
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
      {/* <Menu.Item key="/perfil/">
        <LinkExternal
          size={15}
          style={{ verticalAlign: "middle" }}
          className="uk-margin-small-right"
        />
        Visualizar Perfil
      </Menu.Item> */}
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
        zIndex: 1,
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "80px",
        backgroundColor: "#FFFAFA",
        position: "sticky",
      }}
    >
      <div>
        <Link href="/home">
          <Image
            preview={false}
            src={"/images/logo.svg"}
            width={130}
            className="logo pointer"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Dropdown overlay={menu} placement="bottomRight" className="pointer">
          <span>
            <CircleUser size={25} style={{ verticalAlign: "middle" }} />
            &nbsp; {user.username ? user.username : "Profile"}
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default SiderHeader;
