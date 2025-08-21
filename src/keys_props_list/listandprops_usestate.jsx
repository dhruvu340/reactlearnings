import React, { useState } from 'react'


const Listandprops = ({data}) => {
    const [textc,settextc]=useState("white");
   const changecolor=()=>{
    settextc(textc=='white'?"black":"white");
    if(dataarray.length<5){setdata([...dataarray,{name:"dhruvvvvvv"}])}
    
   }

    const [dataarray,setdata]=useState([]);

  return (
    <div>
        <button onClick={changecolor}>change color</button>
        <ul>
            {data.map((data,index)=>{
return (
    <h1 style={{color:textc==="white"?"white":"black",backgroundColor:textc==="white"?"black":"white"}}key={index}>{data.name}</h1>
)
            })}

            {dataarray.map((data,index)=>{
return (
    <h1 style={{color:textc==="white"?"white":"black",backgroundColor:textc==="white"?"black":"white"}}key={index}>{data.name}</h1>
)
            })}
        </ul>
    </div>
  )
}

export default Listandprops