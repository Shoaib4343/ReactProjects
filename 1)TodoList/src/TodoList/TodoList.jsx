import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);
  console.log(task);

  // input todo value
  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  //handle submit form
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) return; //if input is empty don't save it

    if (task.includes(value)) {
      //it the input task is already presend make the input clean and return
      setValue("");
      return;
    }
    setTask((pre) => [...pre, value]); // when submit button is click add that new value in the end with existing values

    setValue("");
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg max-w-xl mx-auto shadow-lg mt-4">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
        Todo List
      </h1>

      {/* Todo form */}
      <form onSubmit={handleFormSubmit} className="flex mb-6">
        <input
          type="text"
          placeholder="Add a new task..."
          className="flex-grow p-3 rounded-l-lg border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={handleInputValue}
        />
        <button
          type="submit"
          className="px-6 bg-green-500 text-white text-lg font-semibold rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
        >
          Add Task
        </button>
      </form>

      {/* Task List */}
      <ul className="space-y-4">
        {/* Example task */}
        {task.map((val, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <span className="text-lg text-gray-700">{val}</span>
            <div className="flex justify-between items-center gap-6">
              <button className="bg-green-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                <FaCheck />
              </button>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                <RxCross2 />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
