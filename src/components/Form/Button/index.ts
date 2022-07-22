import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.theme['blue-dark']};
    
    height:54px;
    padding:16px;
    
    border-radius: 8px;
    
    color: ${props => props.theme['gray-100']};
    font-size:1rem;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    
    align-items: center;
    gap:8px;

    transition: 0.2s background-color;

    cursor: pointer;

    :hover {
        background-color: ${props => props.theme['blue']};
    }
`;