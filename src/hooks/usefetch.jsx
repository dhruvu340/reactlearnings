import { useState,useEffect } from "react";
import Useeffect from "../useeffect/useeffect";

function useFetch(url,options={}){
    const [data,setdata]=useState(null);
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState(null);

    async function fetchdata() {
        setloading(true);
        try {
            const res=await fetch(url,{...options})
            if(!res.ok){throw new Error(res.statusText);}
            const result=await res.json();
            setdata(result);
            setloading(false)
            seterror(error);
            
        } catch (error) {
            console.log(error);
            setloading(false)
            
        }
    }

    useEffect(()=>{
fetchdata();
    },[url])


    return {data,loading,error}

}

export default useFetch;