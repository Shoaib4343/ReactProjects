import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [isNav, setIsNav] = useState(false)

  const menuRef = useRef(null)
  useEffect(()=>{
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setIsNav(false)
      }
    }
    document.addEventListener("mousedown",handler)
     
    return ()=>{
      document.removeEventListener("mousedown",handler)
    }
  },[])

  // navLink isActive blue Color
  const isActive = ({ isActive }) =>
    isActive ? "text-blue-600 " : "";
  return (
    <>
      <nav  className="bg-gray-900 text-white flex justify-between items-center px-20 h-20">
        <NavLink to="/">
          <h1 className="text-2xl font-bold">WorldAtlas</h1>
        </NavLink>
        <ul className="hidden md:flex justify-between items-center gap-6">
          <NavLink to="/" className={isActive}>
            <li> Home</li>
          </NavLink>
          <NavLink to="/about" className={isActive}>
            <li> About</li>
          </NavLink>
          <NavLink to="/countries" className={isActive}>
            <li> Countries</li>
          </NavLink>
          <NavLink to="/contact" className={isActive}>
            <li> Contact</li>
          </NavLink>
        </ul>

      {/* menu button */}
        <button onClick={()=>{
          //  e.stopPropagation();
          // console.log("menu button is click")
          setIsNav(!isNav)
        }}
         className="flex md:hidden text-white text-4xl transition duration-1000">{isNav ? <TfiClose />: <CiMenuFries /> }</button>
      </nav>

        {/* mobile menu */}
      <ul ref={menuRef} className={`absolute bg-gray-900 w-[60%] text-white   md:hidden transition duration-500 h-screen p-4 ${isNav ? 'translate-x-0 border-t' : '-translate-x-full'}`}>
        <NavLink to="/" className={isActive}>
          <li className="w-full p-2 rounded-md hover:bg-gray-600"> Home</li>
        </NavLink>
        <NavLink to="/about" className={isActive}>
          <li className="w-full p-2 rounded-md hover:bg-gray-600"> About</li>
        </NavLink>
        <NavLink to="/countries" className={isActive}>
          <li className="w-full p-2 rounded-md hover:bg-gray-600"> Country</li>
        </NavLink>
        <NavLink to="/contact" className={isActive}>
          <li className="w-full p-2 rounded-md hover:bg-gray-600"> Contact</li>
        </NavLink>
      </ul>
    </>
  );
};

export default Navbar;
