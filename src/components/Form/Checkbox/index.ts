import styled from "styled-components";
import checked from '../../../assets/checked.svg';

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    
    width: 1.3em;
    height: 1.3em;
    background-color: transparent;
    border-radius: 50%;
    vertical-align: middle;
    border: 2px solid ${props => props.theme['blue']};
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    padding:3.27px;


    :checked {
        background-color: ${props => props.theme['purple-dark']};
        border:none;

        ${props => { return `content: url(${checked})`}}
    }

    :hover{
        background-color: ${props => props.theme['blue-dark']};
        :checked{
            background-color: ${props => props.theme['purple']}    
        }
    }
`;