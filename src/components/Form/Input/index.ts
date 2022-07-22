import styled from "styled-components";

export const Input = styled.input`
    height: 54px;
    width:638px;
    padding:16px;

    color: ${props => props.theme['gray-300']};
    font-size:1rem;
    font-family: 'Inter', sans-serif;
    
    background-color: ${props => props.theme['gray-500']};
    border-radius: 8px;
    border-color: ${props => props.theme['gray-700']};

    :focus{
        outline:none;
        border-color: #9747FF;
        color: ${props => props.theme['gray-100']}
    }
`;