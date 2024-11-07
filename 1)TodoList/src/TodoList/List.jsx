import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const List = ({ val,checked,handleCheck, handleDelete }) => {
  return (
    <>
      <li 
        
        className={`flex items-center justify-between bg-white p-4 rounded-lg shadow-md ${checked ?'line-through':''}`}
      >
        <span className="text-lg text-gray-700">{val}</span>
        <div className="flex justify-between items-center gap-6">
          <button onClick={()=>handleCheck(val)}
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
            <FaCheck />
          </button>
          <button
            onClick={() => handleDelete(val)}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <RxCross2 />
          </button>
        </div>
      </li>
    </>
  );
};

export default List;
