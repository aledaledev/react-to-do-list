import TaskCard from './TaskCard'
import { useContext } from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskList() {
  //accedo a lo que necesito del contexto
  const {tasks} = useContext(TaskContext)
  
  if(tasks.length === 0){
    return <h1 className='text-white text-4xl font-bold text-center'>no tasks yet</h1>
  }

  //podemos usar emmet
  //codigo html va dentro de parentesis, js dentro de llaves 
  return <div className='grid grid-cols-4 gap-2'>{tasks.map(task=>
    <TaskCard key={task.id} task={task}/>)
  }</div>
}

export default TaskList