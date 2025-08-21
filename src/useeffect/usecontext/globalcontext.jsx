import { createContext,useState } from "react";

export const GlobalState=createContext(null);


const Globalcontext = ({children}) => {
  const [start,setstart]=useState(false);
  const handlefetch=()=>{
    setstart(true);
  }
  return (
    <GlobalState.Provider value={{handlefetch,start}} >{children}</GlobalState.Provider>
  )
}

export default Globalcontext