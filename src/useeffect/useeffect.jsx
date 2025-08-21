import React, {  useContext, useEffect, useState } from 'react';
import { GlobalState } from './usecontext/globalcontext';

const Useeffect = () => {
 
  const[dt,setdt]=useState([]);
  const[yes,setyes]=useState(true);

  const globalcontext=useContext(GlobalState);


  

  async function fetchfile() {
    if(globalcontext.start) { const data = await fetch("https://dummyjson.com/products")
        setyes(false);
       const dataset=await data.json();
    setdt(dataset.products);

    }
  }
  
useEffect(() => {
  if (globalcontext.start) {
    fetchfile();
  }

  return () => {
    console.log("Cleanup: file fetched");
  };
}, [globalcontext.start]);


  
  return (
   <>
    <button onClick={globalcontext.handlefetch}>
      fetch files
    </button>

  {yes? (<div>loading.....</div>):( <div>
        {
            dt.map((data,index)=>{
               return (
                    <div key={data?.id}>{data?.title}</div>
                )
            })
        }
        
    </div>)}</>
  );
};

export default Useeffect;
