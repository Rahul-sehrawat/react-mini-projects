import { useState } from "react"

function ToDoList() {

    const [tasks,setTasks] = useState([])
    const [newTask,setNewTasks] = useState('')

    
    function handleInputChange(e){
        setNewTasks(e.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t=>[...t,newTask]);
        setNewTasks('')
        }
    }

    function deleteTask(index){
        const updateTasks = tasks.filter((_,i)=> i !== index)
        setTasks(updateTasks);

    }


    return (
    <div className="to-do-list">
        <h1>To-DO-List</h1>

        <div>
            <input type="text"
             placeholder="enter a Task ..."
            value={newTask}
            onChange={handleInputChange} />

            <button
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        </div>
        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button"
                    onClick={()=>deleteTask(index)}>
                         delete</button>
                </li>
            )}
        </ol>
    
    </div>
    
  )
}
export default ToDoList






