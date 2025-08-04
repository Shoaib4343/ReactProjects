import React from "react";

const ClientBadge = ({ number = "50+", label = "Satisfied Clients", isActive = true }) => {
  return (
    <div className="relative flex justify-center">
      {/* Custom Shadow Effect - Centered and wider than card */}
      <div className={`absolute top-5 left-1/2 transform -translate-x-1/2 w-78 h-25 ${isActive ? 'bg-[#FF8C42] border-2 border-[#F5F1EE]' : 'bg-gray-300'}  opacity-40 translate-y-2`}>
        {/* Shadow Top circle */}
        <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#FF8C42] border-2 border-[#F5F1EE] rounded-full w-12 h-12 flex items-center justify-center text-white text-sm font-bold opacity-70`}>
          {number}
        </div>
      </div>

      {/* Main Card - Centered within shadow */}
      <div className={`relative z-10 flex items-center justify-center w-72 h-28 ${isActive ? 'bg-[#FF8C42] border-2 border-[#F5F1EE]' : 'bg-white border border-gray-400'} rounded-lg ${isActive ? 'text-white' : 'text-[#FF8C42]'} mb-10`}>
        {/* Top circle */}
        <div className={`absolute -top-6 bg-[#FF8C42] border-2 border-[#F5F1EE] rounded-full w-12 h-12 flex items-center justify-center text-white text-sm font-bold shadow-md -z-10`}>
          {number}
        </div>

        {/* Main text box */}
        <div className="px-6 py-4 text-center ">
          <h2 className={`${isActive ? 'text-white' : 'text-[#FF8C42]'} text-xl font-semibold italic`}>
            {label}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClientBadge; 