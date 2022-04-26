import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    }
    
    :root {
        --black : #121214;
        --white: #F8F9FA;
    }
    body {
        background: var(---black)
        color: var(--whitw)
    }
    button{
        cursor:pointer;
    }
    `;

export default GlobalStyle;
