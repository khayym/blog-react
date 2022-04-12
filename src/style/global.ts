import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    a{
        text-decoration:none;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Manrope', sans-serif;
    }
`;
export default GlobalStyle;
