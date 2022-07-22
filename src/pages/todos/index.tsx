import { useState } from "react";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { InfoContent, TodosContainer, Counter, CreatedContent, DoneContent, ListContent, TaskEmpty } from "./styles";
import taskIcon from "../../assets/tasks.svg";

interface Task {
    description: string;
    isDone: boolean;
}

export function Todos() {

    const [tasks, setTasks] = useState<Task[]>([]);

    function handleCreateTask(task: Task) {
        setTasks([...tasks, task]);
    }

    function deleteTask(deleteTask: Task) {
        const newTasks = tasks.filter(task => task.description !== deleteTask.description);
        setTasks(newTasks);
    }

    function checkTask(task: Task){
        //console.log(task);
        //const newTasks = tasks.filter(findTask => findTask.description !== task.description);
        const index = tasks.findIndex(oldTask => oldTask.description === task.description);

        const newTasks = tasks.slice();
        newTasks[index] = task;

        setTasks(newTasks);
        
    }

    const totalTasks = tasks.length;
    const doneTasks = tasks.filter(t => t.isDone).length;

    return (
        <>
            <Header />
            <NewTask handleCreateTask={handleCreateTask} />
            <TodosContainer>
                <InfoContent>
                    <CreatedContent>
                        <p>Tarefas criadas</p>
                        <Counter>{totalTasks}</Counter>
                    </CreatedContent>
                    <DoneContent>
                        <p>Concluidas</p>
                        <Counter>{doneTasks} de {totalTasks}</Counter>
                    </DoneContent>

                </InfoContent>

                {totalTasks > 0 ? (
                    <ListContent>
                        {tasks.map(task => {
                            return (
                                <Task task={task} deleteTask={deleteTask} checkTask={checkTask} key={task.description} />
                            )
                        })}
                    </ListContent>
                ) : (
                    <>
                        <TaskEmpty>
                            <img src={taskIcon} />
                            <p>Você ainda não possui tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </TaskEmpty>

                    </>
                )

                }


            </TodosContainer>

        </>
    )
}