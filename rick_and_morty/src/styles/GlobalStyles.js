import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    display-inside: flow;
    background-image: url('../img/centro-telecomunicaciones.jpg');
    flex-direction: column;
}

img {
    max-width: 23%;
    height: auto;
}
`;

export default GlobalStyles;