import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    *, 
    *:before, 
    *:after {
        box-sizing:border-box;
        margin: 0; 
        padding: 0; 
    }

    body {
        background:#5C12A6;
        color: #2F0459;
    }
`

export default GlobalStyle;