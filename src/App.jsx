import Form from "../form-dynamic";
import LoginComponent from "../login";
import RegisterComponent from "../register";
import Main from "./keys_props_list/main";
import Classbased from "./typesofcomp/classbased";
import Function from "./typesofcomp/function";
import Layout from "./typesofcomp/layout";
import Notfound from "./typesofcomp/notfound";
import Useeffect from "./useeffect/useeffect";
import Usereducer from "./usereeducer/usereducer";
import { Routes, Route, useNavigate, Link, useRoutes } from 'react-router-dom';


function Customrouting(){
  const routes=useRoutes([{
    path:"/home",
    element:<Layout/>,
    children:[
      {
        path:"class",
        element:<Classbased/>
      },
      
      {
        path:"function",
        element:<Function/>
      }
    ]
  },{
    path:"*",
    element:<Notfound/>
  }])

  return routes
}


function App() {
  const navigate=useNavigate();


  return (
<>
{/* <Classbased/>
<Function/>
<Main/>
<Useeffect/>
<Usereducer/> */}

{/* <Form/> */}

<div style={{display:"flex",gap:"20px"}}>
  <LoginComponent/>
  <RegisterComponent/>
</div>


<div>
  <header>
    how router works??
    <button onClick={()=>navigate("/class")}>class</button>
    <button onClick={()=>navigate("/function")}>function</button>
    <button><Link to={"/class"}>CLASS</Link></button>
  </header>

{/* <Routes>
  <Route path="/home">
    <Route path="function" element={<Function/>}/>
  <Route path="function/:id" element={<Function/>}/>
  <Route path="class" element={<Classbased/>}/>

  </Route>
    <Route path="*" element={<Notfound/>}/>
 

  
</Routes> */}

<Customrouting/>
  
</div>

</>
  )
}

export default App
