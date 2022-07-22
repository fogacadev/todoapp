import  styled, { css }  from "styled-components";

interface TaskContainerProps {
    isDone: boolean;
}

export const TaskContainer = styled.div<TaskContainerProps>`
    height: 72px;
    width: 736px;
    padding:16px 12px;

    display:flex;
    justify-content: space-between;
    gap:8px;

    background-color: ${props => props.theme['gray-500']};
    border: 1px solid ${props => props.theme['gray-400']};
    border-radius: 8px;

    ${props => {
            if (props.isDone){
                return css`
                border-color: ${props => props.theme['gray-500']};`
            }
            else{
                return css`
                border-color: ${props => props.theme['gray-400']};`
            }
        }}

    p{
        text-align: left;
        flex:1;
        display:flex;

        ${props => {
            if (props.isDone){
                return css`
                color: ${props.theme['gray-300']}; 
                text-decoration-line: line-through;
                `
            }
        }}
    }
    
`;