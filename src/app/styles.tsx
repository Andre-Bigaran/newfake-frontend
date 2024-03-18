import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 450px 1fr;
  height: 100vh;
  section > div {
    min-width: 100%;
  }
  .bg {
    height: 100vh;
    object-fit: cover;
  }
  .container-logo {
    display: flex;
    justify-content: center;
    .logo {
      max-width: 300px;
    }
  }
  .button-login {
    background-color: #000000;
    color: #f5f5fa;
    &:hover {
      background-color: #002040;
    }
  }
`;
