import { createContext, useState, useEffect } from "react";
import postData from '../helpers/postData'
import getData from "../helpers/getData";
import putData from "../helpers/putData";
import deleteData from '../helpers/deleteData'
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('')
  function createTask(task) {
    postData(task).then(err => setError(err))
  }
  function deleteTask(taskId) {
    deleteData(taskId).then(err => setError(err))
  }
  function checkTask(task) {
    putData(task).then(err => setError(err))
  }
  useEffect(() => {
    getData().then((data) => setTasks(data));
  }, [tasks]);

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          createTask,
          deleteTask,
          checkTask,
          error,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}

export default TaskContext;