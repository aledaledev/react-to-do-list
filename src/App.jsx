import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
//use rfce
function App() {

  return (
    //contenida en un fragment
    <main className='bg-zinc-800 h-screen'>
      <div className='container mx-auto p-10x'>
        <TaskForm/>
        <TaskList/> 
      </div>
    </main>  
  )
}
export default App
//componentes hijos de app dentro de components