import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext';
//importamos el contexto

function TaskForm() {
    //variable y funcion que altera esa variable
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    //lo que se va guardando se manejara despues

    //se trae todos las propiedades seleccionadas del contexto
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        //se llama createTask en App con title
        const taskBody= {
          title,
          description,
        }
        createTask(taskBody)
        setTitle('');
        setDescription('');
    }

  return (
    <div className='max-w-md mx-auto mb-4'>
      <form className='bg-slate-500 p-8' onSubmit={handleSubmit}>
        <h1 className='mb-2 text-white text-2xl font-bold '>Create your task</h1>
        <input className='bg-slate-200 p-2 mb-2 w-full' placeholder="write your task" onChange={e=> setTitle(e.target.value)} value={title} autoFocus/>
        <input className='bg-slate-200 p-2 mb-2 w-full' placeholder='write your description' onChange={e => setDescription(e.target.value)} value={description}/>
        <button className='bg-indigo-500 p-1 rounded-md text-white hover:bg-indigo-400'>save</button>
      </form>
    </div>
  );
}

export default TaskForm;
