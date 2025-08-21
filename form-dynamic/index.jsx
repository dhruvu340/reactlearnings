import React, { useState } from 'react'

const Form = () => {
    const [formd,setformd]=useState({
        name:'',
        email:'',
    })
    function handleonchange(e){
        const {name,value}=e.target;
        setformd({
            ...formd,
            [name]:value,
        })
    }

    function handlesubmit(e){
        e.preventDefault();
    }
  return (
    <div>
        <div>form</div>
        <form onSubmit={handlesubmit}>
            <input type="text" name="name" placeholder='entername' value={formd.name} onChange={handleonchange} />
            <input type="email" name="email" placeholder='enter email' value={formd.email} onChange={handleonchange} />
            <button type="submit">submit</button>
        </form>
    
    
    
    
    </div>
  )
}

export default Form