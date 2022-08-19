import React, { useEffect, useState } from "react";
import { ListStyle } from "./styles";
import { Counter } from "../Counter"
import { Task } from '../../@types/tasks'


interface ListProps {
  task: string[]
}



export function List({ task }: ListProps) {

  const [taskDone, setTaskDone] = useState<number>(0)

  const [taskCreated, setTaskCreated] = useState<number>(0)

  useEffect(() => {

    // validação
    task.length % 2 === 0 && setTaskDone(taskDone + 1)


    setTaskCreated(task.length) // tarefas criadas qtd


    console.log('taskDone', taskDone)
    console.log('taskCreated', taskCreated)
  }, [task])


  return (
    <>
      <Counter
        created={taskCreated}
        done={taskDone}
      />

      {task && task.map(

        (t, index) => {

          return (
            <ListStyle
              key={index}>
              {t}
            </ListStyle>
          )
        })}

    </>
  )
}