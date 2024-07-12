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
        <h1 className="heading">To-DO-List</h1>

        <div>
            <input type="text"
                className="inputText"
                placeholder="enter a Task ..."
                value={newTask}
                onChange={handleInputChange} />

            <button
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        </div>
        <ol className="orderlist">
            {tasks.map((task,index)=>
                <li className="singleListItem" key={index}>
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






