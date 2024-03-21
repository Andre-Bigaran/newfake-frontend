import styled from "styled-components";

const Container = styled.div`
  /* ADMIN */

  aside {
    background-image: var(--blue) !important;
    color: white;
    position: relative;
    ul {
      background-color: transparent !important;
    }
    .ant-layout-sider-children {
      padding-top: 20px;
      display: flex;
      flex-flow: column;
      align-items: center;
      .ant-menu {
        border-right: 0px transparent;
        color: white;
        a {
          color: white;
        }
        .ant-menu-item-selected {
          svg {
            fill: var(--blue) !important;
          }
          a {
            color: var(--blue) !important;
          }
          &::after {
            border-right: 3px solid var(--blue) !important;
          }
        }
        .ant-menu-item:hover {
          svg {
            color: var(--blue);
          }
        }
      }
    }
  }

  .ant-pagination-item-link {
    span {
      position: relative;
      top: -4px;
    }
  }

  .ant-btn-primary {
    background-color: var(--blue);
    border-color: var(--blue);
    &:hover {
      background-color: var(--blueDark);
      border-color: var(--blueDark);
    }
  }

  .ant-steps-item-process > .ant-steps-item-container {
    > .ant-steps-item-content > .ant-steps-item-title::after {
      background-color: #ccc !important;
    }
    .ant-steps-item-icon {
      border-color: var(--blue);
      background-color: var(--blue);
    }
    .ant-steps-icon {
      top: -1px;
    }
  }
  .ant-steps-item-wait {
    .ant-steps-item-content > .ant-steps-item-title::after {
      background-color: #ccc !important;
    }
    .ant-steps-item-icon {
      background-color: white;
    }
    .ant-steps-icon {
      top: -1px;
    }
  }

  .ant-steps-item-finish > .ant-steps-item-container {
    & > .ant-steps-item-content > .ant-steps-item-title::after {
      background-color: var(--blue);
    }
    .ant-steps-item-icon {
      background-color: white;
      border-color: var(--blue);
    }

    .ant-steps-finish-icon {
      background-color: white !important;
      color: var(--blue);
      top: -4px;
      position: relative;
    }
  }

  .uk-form-label {
    font-weight: 500;
    color: #333;
  }
`;

export default Container;
