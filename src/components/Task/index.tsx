import { CheckCircle, Trash } from "phosphor-react";
import React from "react";
import { ITask } from "../../App";
import { TaskButton, TaskButtonDelete, TaskCheckContainer, TaskContainer } from "./styles";

interface Props {
  task: ITask,
  onDelete: (title: string) => void,
  onConplete: (title: string) => void
}


export function Task({ task, onConplete, onDelete }: Props) {

  return (
    <TaskContainer>
      <TaskCheckContainer>
        <TaskButton onClick={() => onConplete(task.id)}>
          {task.isCompleted ? <CheckCircle size={25} color='#5E60CE' /> : <div />}
        </TaskButton>
        <h2 className={task.isCompleted ? 'titleCompleted' : 'title'}>
          {task.title}
        </h2>

        <TaskButtonDelete onClick={() => onDelete(task.id)}>
          <Trash size={20} color='#808080' />
        </TaskButtonDelete>

      </TaskCheckContainer>
    </TaskContainer>
  )
}