import React from 'react'
import Commoninput from './commoninput';

const Customform = ({formControls=[],formData,setFormData,buttontext,handlesubmit}) => {
  const getformtype={
    INPUT:'input',
    SELECT:'select',
    TEXTAREA:'textarea'
  }
  
  const renderformel=(getformel)=>{
    let content=null;
    switch (getformel.componentType) {
      case getformtype.INPUT:
          content = <Commoninput label={getformel.label} name={getformel.name} id={getformel.id} placeholder={getformel.placeholder} type={getformel.type} value={formData[getformel.name]} onChange={(e)=>{
            setFormData({
              ...formData,
              [e.target.name]:e.target.value
            })
          }}/>
        break;
    
      default:
        break;
    }

    return content
  }
  
  
  return (
    <form onSubmit={handlesubmit}>

      {
        formControls?.length ? formControls.map(singleformel=>renderformel(singleformel)):null
      
      
      }

      <div>
        <button type='submit'>{buttontext||'submit'}</button>
      </div>

    </form>
  )
}

export default Customform;