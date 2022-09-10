import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskCard({task}) {
  //hacemos prop deling(se delega el estado del padre al hijo)
  //contexto contendra al componente padre y a sus hijos, estos se comunicaran con el contexto 

  //desde aca tengo acceso al context
  const {deleteTask} = useContext(TaskContext)
  //varios componentes ajenos al app pero dentro del contexto podran acceder al mismo

  //con el arrow function evitamos que se ejecute en ese instante
  return (
    <>
      <div className='bg-gray-800 text-yellow-100 p-4 rounded-md'>
      <h2 className='text-xl font-bold capitalize'>{task.title}</h2>
      <p className='text-gray-400 text-sm'>{task.description}</p>
      <button className='bg-red-500 px-2 py-1 rounded-md mt-2 hover:bg-red-400' onClick={()=>deleteTask(task.id)}>eliminate</button>
    </div>
    </>
  )
}

export default TaskCard