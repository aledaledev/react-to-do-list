import { createContext, useState, useEffect } from "react";
import {tasks as data} from '../data/tasks'
//aca guarda todos los valores
//se pueden crear varios contextos

//nombre del contexto, almacena los datos
export const TaskContext = createContext();

//nombre del componente que engloba a los demas componentes
export function TaskContextProvider(props) {
  //se podra llamar desde cualquier hijo de app

  //pasan de pertenecer del app al context
  //tasks es un array
  const [tasks, setTasks] = useState([]);

  //se le agrega un nuevo task
  function createTask({ title, description }) {
    setTasks([
      ...tasks,
      {
        //crea nuevo objeto
        title,
        id: tasks.length,
        description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  //cuando cargue todo tendra la data
  useEffect(() => {
    setTasks(data);
  }, []);
  //se ejecutara cuando carge el componente TaskList

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          createTask,
          deleteTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}

export default TaskContext;
