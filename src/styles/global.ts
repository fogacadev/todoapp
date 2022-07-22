import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./themes/default";


export const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        
    }

    body{
        font-family: 'Inter', sans-serif;
        color: ${props => props.theme['gray-200']};
        background-color: ${props => props.theme['gray-600']}
    }

    input, button {
        display:flex;
    }
`;