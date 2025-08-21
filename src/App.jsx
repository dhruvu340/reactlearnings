import Form from "../form-dynamic";
import LoginComponent from "../login";
import RegisterComponent from "../register";
import Main from "./keys_props_list/main";
import Classbased from "./typesofcomp/classbased";
import Function from "./typesofcomp/function";
import Useeffect from "./useeffect/useeffect";
import Usereducer from "./usereeducer/usereducer";


function App() {


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

</>
  )
}

export default App
