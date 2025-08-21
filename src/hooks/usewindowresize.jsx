import { useEffect, useState } from "react";

export default function useWindowresize(){
    const [size,setsize]=useState({
        innerHeight:undefined,
        innerWidth:undefined
    })

    useEffect(()=>{

  function handleresize(){
    setsize({
        innerHeight:window.innerHeight,
        innerWidth:window.innerWidth
    })
  }
        window.addEventListener('resize',handleresize);
        handleresize()

        return ()=>{
            window.removeEventListener('resize',handleresize)
        }
    },[])


    return size;
}