import { useState } from "react";
import { Checkbox } from "../Form/Checkbox";
import { DeleteButton } from "../Form/DeleteButton";
import { TaskContainer } from "./styles";

interface Task {
    description: string;
    isDone: boolean;
}

interface TaskProps {
    task: Task;
    deleteTask: (task: Task) => void;
    checkTask: (task: Task) => void;
}

export function Task({ task, deleteTask, checkTask }: TaskProps) {

    function handleCheckTask(isDone: boolean){
        task.isDone = isDone;
        checkTask(task);
    }

    return (
        <TaskContainer isDone={task.isDone}>
            <Checkbox checked={task.isDone} onChange={e => handleCheckTask(e.target.checked)} />
            <p>{task.description}</p>
            <DeleteButton onClick={() => deleteTask(task)}/>
        </TaskContainer>
    )
}