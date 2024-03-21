import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        &:focus {
            outline: 0px solid transparent !important
        }
    }
 
    html, body, #root {
        height: 100vh;
    }

    body {
        color: #333;
        background-color: #f5f5fa;
        overflow-x: hidden
    }

    h1, h2, h3, h4, h5, h6, button, a {
        color: #333
    }

    :root {
        --gray: #b5b6cd;
        --blue: #800080;
        --purple: #4765cc;
        --lightPurple: #6483ec;
        --green: #77c285;
        --red: #ff8373;
    }

    /* 
     !!! COLORS    
     */

    .colorBlue {
        color: var(--blue) !important;
    }

    a {
        &:hover {
            text-decoration: none
        }
    }

    .pointer {
        cursor: pointer;
    }
    

    *:focus {
        outline: 0px !important
    }
`;
export default GlobalStyle;
