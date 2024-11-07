import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import List from "./List";
import TodoDate from "./TodoDate";
import { getLocalData, setLocalData } from "./LocalStorage";


const TodoList = () => {
  const [task, setTask] = useState(()=>getLocalData());

  // handle submit form
  const handleFormSubmit = (value) => {
    const { id, content, checked } = value;
    if (!value.content) return; //if input is empty don't save it
    // if (task.includes(value)) return; //it the input task is already presend make the input clean and return

    const ifContnet = task.find((current) => current.content === content);
    if (ifContnet) return;
    // add new taks
    setTask((pre) => [...pre, { id, content, checked }]); // when submit button is click add that new value in the end with existing values
  };

  setLocalData(task);

  // Delete taks
  const handleDelete = (val) => {
    // setTask((pre) => pre.filter((_, i) => i !== index));
    const updateTask = task.filter((curTask) => curTask.content !== val);
    setTask(updateTask);
  };

  // handle Clear All Button
  const handleClearAllButton = () => {
    setTask([]);
  };

  // handle check
  const handleCheckButton = (data)=>{
    const updateTask = task.map((curTask)=>{
      if(curTask.content === data){
        return {...curTask,checked:!curTask.checked}
      }else{
        return curTask
      }

    })
    setTask(updateTask)
  }

  return (
    <div className="bg-gray-100 p-8 rounded-lg max-w-xl mx-auto shadow-lg mt-4">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
        Todo List
      </h1>

      <TodoDate />

      {/* form input task */}
      <TodoForm addOnSubmitHandler={handleFormSubmit} />

      {/* Task List */}
      <ul className="space-y-4">
        {/* Example task */}
        {task.map((val) => (
          <List val={val.content} key={val.id} checked={val.checked} handleCheck={handleCheckButton} handleDelete={handleDelete} />
        ))}
      </ul>

      {task.length <= 1 ? null : (
        <button
          onClick={handleClearAllButton}
          className="px-6 py-2 mt-6 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default TodoList;
