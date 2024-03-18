import styled from "styled-components";

export const Container = styled.div`
  .ant-menu {
    margin-top: 30px !important;
  }

  .ant-menu-item span a {
    color: black !important;
  }

  .ant-menu.ant-menu-inline-collapsed > .ant-menu-item,
  .ant-menu.ant-menu-inline-collapsed
    > .ant-menu-item-group
    > .ant-menu-item-group-list
    > .ant-menu-item,
  .ant-menu.ant-menu-inline-collapsed
    > .ant-menu-item-group
    > .ant-menu-item-group-list
    > .ant-menu-submenu
    > .ant-menu-submenu-title,
  .ant-menu.ant-menu-inline-collapsed
    > .ant-menu-submenu
    > .ant-menu-submenu-title {
    padding: 0 calc(50% - 30px / 2) !important;
  }

  .logo {
    padding: 0 6px !important;
  }

  aside {
    div {
      ul {
        padding-bottom: 50px;
      }
    }
    .ant-menu-item {
      margin: 0px !important;
      .ant-menu-title-content {
        font-size: 13px;
      }
    }
  }
`;
