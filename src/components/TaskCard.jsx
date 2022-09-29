import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskCard({ task }) {
  const {title, id, description, check} = task
  const { deleteTask, checkTask } = useContext(TaskContext);
  return (
    <>
      <div className="bg-gray-700 border-t-2 p-4 transition-all flex flex-col gap-2" style={{ borderColor:check ? "#2ada24" : "#f7f708" }}>
        <h2 className="text-yellow-100 text-xl font-bold capitalize">{title}</h2>
        <p className="text-gray-300 text-sm font-medium">{description}</p>
        <div className="flex justify-between mt-2 h-full items-end">
          <button
            className="bg-red-400 px-2 py-1 text-slate-50 border-b border-red-600 hover:bg-red-500 transition-all"
            onClick={() => deleteTask(id)}
            >
            delete
          </button>
          <img
            onClick={() => checkTask(task)}
            className="invert w-7 cursor-pointer"
            src={check? "./src/assets/checkbox.svg": "./src/assets/box.svg"}
            alt="check"
          />      
        </div>
      </div>
    </>
  );
}

export default TaskCard;
