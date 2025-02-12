import { useState } from "react";

function Todo(){

    let [tasks,setTasks] = useState([])
    let [task,setTask] = useState("")

    let addTask = (e)=>{
        if(task!==""){
        setTasks(t=>([...t,task]))
        setTask("")
        }
    }

    let removeTask = (index)=>{
        setTasks(tasks.filter((ele,i)=>(i!==index)))
    }

    let moveUp = (index)=>{
        if (index>0){
        let updated_tasks = [...tasks];
        [updated_tasks[index],updated_tasks[index-1]] = [updated_tasks[index-1],updated_tasks[index]];
        setTasks(updated_tasks)
        }
    }

    let moveDown = (index)=>{
        let len_of_tasks = tasks.length
        if (index<len_of_tasks-1){
        let updated_tasks = [...tasks];
        [updated_tasks[index],updated_tasks[index+1]] = [updated_tasks[index+1],updated_tasks[index]];
        setTasks(updated_tasks)
        }
    }

    let addNewTask = (e)=>{
        let newTask = document.querySelector("#newTask");
        setTask(newTask.value)
    }
    return (<>
        <div className="todo">
        <h1>To Do List</h1>
        <div className="newTask-container">
        <input id="newTask" type="text" value={task} placeholder="Enter Task" onChange={addNewTask}></input>
        <button id="add" onClick={addTask}>Add Task</button><br></br>
        </div>
        <div className="task-container">
        <p>Tasks</p>
        <ol className="todo-items">
            {tasks.map((ele,index)=><div className="item-box">
                <li key={index}>{ele}</li>
                <button id="del" onClick={()=>removeTask(index)}>Delete</button>
                <button id="up" onClick={()=>moveUp(index)}>👆</button>
                <button id="down" onClick={()=>moveDown(index)}>👇</button>
            </div>)}
        </ol>
        </div>
        </div>
    </>);
}
export default Todo;