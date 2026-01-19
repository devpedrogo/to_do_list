import  { useEffect, useState } from "react";
import Tasks from "./componentes/Task";
import AddTasks from "./componentes/AddTask";

export default function App() {
  const [tasks, setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId){
        return {...task, isCompleted: !task.isCompleted};
      }

      return task;
    });
    setTask(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTask(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    }
    setTask([...tasks, newTask]);
  }

  return ( 
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] flex flex-col gap-2">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tarefas={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}
