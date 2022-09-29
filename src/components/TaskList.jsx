import TaskCard from './TaskCard'
import { useContext } from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskList() {
  const {tasks, error} = useContext(TaskContext)
  if(error) return  <h2 className='text-yellow-100 text-4xl font-bold text-center bg-gray-700 p-4 border-t-2 border-gray-900 mt-10 mx-auto max-w-md'>{error}</h2>
  if(!tasks.length) return <h2 className='text-yellow-100 text-4xl font-bold text-center bg-gray-700 p-4 border-t-2 border-gray-900 mt-10 mx-auto max-w-md'>No tasks yet</h2>
  return <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
    {tasks.map(task=>
    <TaskCard key={task.id} task={task}/>)
  }</div>
}
export default TaskList