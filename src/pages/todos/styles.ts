import styled from "styled-components";

export const TodosContainer = styled.div`
    width:736px;
    display:flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top:50px;
`;

export const InfoContent = styled.div`
    margin:10px 0;
    height:16px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`

export const CreatedContent = styled.div`
    display:flex;
    gap: 8px;
    color: ${props => props.theme['blue']};
    font-weight: bold;
    font-size:14px;
`;

export const DoneContent = styled.div`
    display:flex;
    gap: 8px;
    color: ${props => props.theme['purple']};
    font-weight: bold;
    font-size:14px;
`;

export const Counter = styled.div`
    background-color: ${props => props.theme['gray-400']};
    padding: 2px 8px;

    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;

    font-size: 12;
    font-weight:bold;
    color:${props => props.theme['gray-200']};
`

export const ListContent = styled.div`
    div + div{
        margin-top: 10px;
    }
`

export const TaskEmpty = styled.div`
    border-top: 1px solid #333333;
    border-radius: 8px;
    display:flex;
    flex-direction: column;
    color: ${props => props.theme['gray-300']};

    padding:64px 24px;
    align-items:center;

    img {
        width:56px;
        height:56px;
    }

    p {
        margin-top:16px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 140%;
    }
    p + p{
        font-weight: 400;
        margin-top:0;
    }
`