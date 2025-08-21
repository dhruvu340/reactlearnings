import React from 'react'
import Listandprops from './listandprops_usestate'

const data=[]

const Main = () => {
    let a=true;
  return (
    <div>
       {a==true?( <Listandprops data={data}/>):(<div>hey</div>)}
        
    </div>
  )
}

export default Main