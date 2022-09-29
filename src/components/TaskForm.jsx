import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext';
function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {createTask} = useContext(TaskContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!title || !description) return 
        const taskBody= {
          title,
          description,
        }
        createTask(taskBody)
        setTitle('');
        setDescription('');
    }
  return (
    <div className='max-w-md mx-auto mb-6'>
      <form className='bg-slate-500 p-8 flex flex-col gap-3 text-slate-600 border-t-2 border-indigo-700' onSubmit={handleSubmit} >
        <h1 className='mb-2 text-slate-50 text-2xl font-bold '>Tasks creator</h1>
        <input className='bg-slate-200 p-2 w-full' placeholder="task" onChange={e=> setTitle(e.target.value)} value={title} autoFocus/>
        <input className='bg-slate-200 p-2 w-full' placeholder='description' onChange={e => setDescription(e.target.value)} value={description}/>
        <button className='bg-indigo-400 px-2 py-1 self-start text-slate-50 border-b border-indigo-600 transition-all hover:bg-indigo-500'>save</button>
      </form>
    </div>
  );
}
export default TaskForm;