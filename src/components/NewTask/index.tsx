import { Button } from "../Form/Button";
import { Input } from "../Form/Input";
import plus from "../../assets/plus.svg";
import { NewTaskContainer } from "./styles";
import { FormEvent, useRef, useState } from "react";

interface Task {
    description: string;
    isDone: boolean;
}

interface NewTaskProps {
    handleCreateTask: (task: Task) => void;
}

export function NewTask({ handleCreateTask }: NewTaskProps) {

    const [description, setDescription] = useState<string>('Adicione uma nova tarefa');

    function handleCreate() {


        handleCreateTask({
            description: description,
            isDone: false
        });

        setDescription('');
    }

    return (
        <NewTaskContainer>
            <Input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <Button onClick={handleCreate}>
                Criar
                <img src={plus} />
            </Button>
        </NewTaskContainer>
    )

}