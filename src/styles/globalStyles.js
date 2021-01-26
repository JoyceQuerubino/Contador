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
        background:#2476bf;
        color: #164e7f;
    }
`

export default GlobalStyle;