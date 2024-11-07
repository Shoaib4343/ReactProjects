import React, { useState } from "react";

const TodoForm = ({addOnSubmitHandler}) => {
  const [value, setValue] = useState({});

  // input todo value
  const handleInputValue = (e) => {
    setValue(e.target.value);
};

const handleFormSubmit = (e)=>{
    e.preventDefault();
    addOnSubmitHandler({id:value,content:value,checked:false});
    setValue({id:"",content:"",checked:false})

  }
  return (
    <>
      {/* Todo form */}
      <form onSubmit={handleFormSubmit} className="flex mb-6">
        <input
          type="text"
          placeholder="Add a new task..."
          className="flex-grow p-3 rounded-l-lg border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value.content}
          onChange={handleInputValue}
        />
        <button
          type="submit"
          className="px-6 bg-green-500 text-white text-lg font-semibold rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
