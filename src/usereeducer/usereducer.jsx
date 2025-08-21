import React, { useReducer } from 'react'

let prev={
    colorst:false,
    hidest:false,

}
const hide="HIDE_TEXT";
const show="SHOW_TEXT";
const colors="CHANGE_STYLE"

const reducer=(state,action)=>{
switch (action.type) {
    case "HIDE_TEXT":
        return {
            ...state,hidest:true,
        }
        break;
case "SHOW_TEXT":
        return {
            ...state,hidest:false,
        }
        break;

        case "CHANGE_STYLE":
        return {
            ...state,colorst:(!state.colorst),
        }
        break;
    default:

        break;
}
}
const Usereducer = () => {
    const [state,dispatch]=useReducer(reducer,prev)

    
  return (
   <>
   {state.hidest?(<div></div>): (<div style={{color:state.colorst?"black":"green"}}>Usereducer</div>)}
    <button onClick={()=>{
        dispatch({type:hide})
    }}>hide text</button>
        
        <button onClick={()=>{
        dispatch({type:show})
    }}>show</button>
        <button onClick={()=>{
        dispatch({type:colors})
    }}>change color</button>
    </>
  )
}

export default Usereducer