import { useState } from "react";

function AddTasks({ onAddTaskSubmit }){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="space-y-4 bg-slate-100 p-6 rounded-md">
            <input 
            type="text" placeholder="Título da Tarefa" className="bg-slate-100 text-left  text-black p-2 rounded-md w-full border-2 outline-none"

            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
            <input 
            type="text" placeholder="Descrição da Tarefa" className="bg-slate-100 text-left  text-black p-2 rounded-md w-full border-2 outline-none"

            value={description}
            onChange={(event) => setDescription(event.target.value)}

            />
            <button 
            onClick={() => {
                if(!title.trim() || !description.trim()){
                    return alert("Por favor adcionar título e descrição!");
                }
                onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
                    
            }
            }
            
            className="bg-slate-600 hover:bg-slate-500 text-white p-2 rounded-md w-full"
            >
                Adicionar
            </button>
        </div>
    )
}

export default AddTasks;