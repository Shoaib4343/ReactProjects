// import React, { useState } from "react";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// const AccountToggle = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
//       <button
//         onClick={handleToggle}
//         className="flex p-0.5 hover:bg-stone-200 hover:text-primary rounded transition-colors relative gap-2 w-full items-center"
//       >
//         <img
//           src="https://api.dicebear.com/9.x/notionists/svg"
//           alt="avatar"
//           className="size-8 rounded shrink-0 bg-violet-500 shadow"
//         />
//         <div className="text-start">
//           <span className="text-sm font-bold block">Tom Is Loading</span>
//           <span className="text-xs block text-stone-500">tom@hover.dev</span>
//         </div>

//         {isOpen ? (
//           <FiChevronUp className="absolute right-2 top-1/2 -translate-y-1/2 text-xs" />
//         ) : (
//           <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-xs" />
//         )}
//       </button>

//       {/* Optional: dropdown content */}
//       {isOpen && (
//         <div className="mt-2 px-2 text-sm text-stone-600">
//           <p>Profile</p>
//           <p>Settings</p>
//           <p>Logout</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AccountToggle;



import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

const AccountToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-500  relative">
      {/* Button */}
      <button
        onClick={handleToggle}
        className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-stone-100 transition-colors relative hover:text-gray-800"
      >
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className="w-9 h-9 rounded-full ring-2 ring-violet-400  shadow-sm"
        />
        <div className="flex flex-col text-start">
          <span className="text-sm font-bold">Taxila</span>
          <span className="text-xs text-stone-500">taxila@.com</span>
        </div>

        {isOpen ? (
          <FiChevronUp className="absolute right-3 text-gray-500" />
        ) : (
          <FiChevronDown className="absolute right-3 text-gray-500" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden animate-fadeIn z-50"
        >
          <MenuItem icon={<FiUser />} label="Profile" />
          <MenuItem icon={<FiSettings />} label="Settings" />
          <MenuItem icon={<FiLogOut />} label="Logout" danger />
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, label, danger }) => (
  <button
    className={`flex items-center gap-3 w-full px-4 py-2 text-sm transition-colors ${
      danger
        ? "text-red-600 hover:bg-red-50"
        : "text-gray-700 hover:bg-stone-50"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default AccountToggle;
