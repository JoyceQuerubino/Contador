import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    *, 
    *:before, 
    *:after {
        box-sizing:border-box; //Sempre coloque o border-box, para que as definições de margin, padding, sejam corretas e não adcionadas aumentando o tamanho.
        margin: 0; 
        padding: 0; 
    }

    body {
        background:#5C12A6;
        color: #2F0459;
    }
`

export default GlobalStyle;