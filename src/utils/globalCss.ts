import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;

    
    @media(max-width:1200px){ //width < 1200
        font-size: 56.25%; //1rem = 9px, 9/16 = 56.25%
    }
    @media(max-width:900px) { //width < 900
        font-size: 50%; //1rem = 8px, 8/18 = 50%
    }
    @media(min-width:1800px) {
        font-size: 75%; //1rem = 12, 12/16 = 75%
    }
}

body {
    box-sizing: border-box;
    padding: 3rem;

    @media(max-width:900px) { 
        padding: 0;
    }
}

::selection {
    background-color: ${({ theme }) => theme.colors.main.lightGreen};
    color: ${({ theme }) => theme.colors.font.white};
}`;
