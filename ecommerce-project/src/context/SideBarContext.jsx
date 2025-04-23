import { createContext, useState } from "react";

export const SideBarContext = createContext();

export const SideBarProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = ()=>{
        setIsOpen(false)
    }
    return(
        <SideBarContext.Provider value={{isOpen,setIsOpen,handleIsOpen}}>{children}</SideBarContext.Provider>
    )
}