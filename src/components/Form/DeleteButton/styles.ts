import styled from "styled-components";
import trash_red from '../../../assets/trash_red.svg';


export const ButtonContainer = styled.div`
    
    button{
        background-color: transparent;
        width:24px;
        height:24px;
        cursor: pointer;
        padding: 6px 5px;
        border:none;
        align-items: center;
        justify-content: center;
        
        :hover{       
            background-color: ${props => props.theme['gray-400']};
            border-radius: 4px;
        
            img {
                ${props => { return `content: url(${trash_red})` }}
            }
        }
    }
    
`;

export const ImgContainer = styled.img`
    width: 12.48px;
    height: 14px;
    display: flex;
`
