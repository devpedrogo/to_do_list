import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props){
    const navigate = useNavigate();

    function onSeeDetailsClick(tarefa){
        const query = new URLSearchParams()
        query.set("title", tarefa.title)
        query.set("description", tarefa.description)
        navigate(`/task?${query.toString()}`)
    }

    return(
        <ul className="space-y-4 bg-slate-100 p-6 rounded-md max-h-102 overflow-y-auto">
            {props.tarefas.map((tarefa) => (
                <li key={tarefa.id} className="flex gap-2">
                    <button 
                    onClick={() => props.onTaskClick(tarefa.id)}
                    className={`bg-slate-400 hover:bg-slate-600 text-left flex gap-2 items-center text-white p-2 rounded-md w-full ${tarefa.isCompleted && 'line-through'}`}>
                        {tarefa.isCompleted && <CheckIcon style={{width:"22px"}}/>}
                        {tarefa.title}
                        
                    </button>

                    <button 
                    onClick={() => onSeeDetailsClick(tarefa)}
                    className="bg-slate-400 hover:bg-slate-600 text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>

                    <button onClick={() => props.onDeleteTaskClick(tarefa.id)}
                    className="bg-slate-400 hover:bg-slate-600 text-white p-2 rounded-md">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    )
}
 
export default Tasks;