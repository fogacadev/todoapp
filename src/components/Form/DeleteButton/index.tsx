import { ButtonContainer, ImgContainer } from "./styles";
import trash from '../../../assets/trash.svg';

interface ButtonProps {
    onClick: () => void;
}

export function DeleteButton({ ...rest }: React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <ButtonContainer >
            <button {...rest}>
                <ImgContainer src={trash} />
            </button>
        </ButtonContainer>
    )
}