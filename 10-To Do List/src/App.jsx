import { useState } from "react"
import List from "./List"
import AddTaskModal from "./AddTaskModal"

function App() {
  const [taskList,setTaskList]=useState(
  JSON.parse(localStorage.getItem('taskList')) || []
  )

  if (taskList.lenght===0){
    localStorage.setItem('taskList',JSON.stringify([]))
  }

  return (
    <>
    <div className="container">
      <h2>To Do List</h2>
      <hr />
      <List 
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <hr  />
        <div className="text-end">
          <AddTaskModal 
          taskList={taskList} 
          setTaskList={setTaskList}
          />
          <button 
          type="button"
          className="btn btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target={"#addTaskModal"}>
          <i className="bi bi-plus-lg"></i>
            Add
          </button>
        </div>
    </div>
    </>
  )
}

export default App