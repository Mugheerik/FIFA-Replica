import "./App.css"
import Menuu from "./cmp/Menu";
import Signup from "./cmp/signup";
import Signin from "./cmp/Signin";
 import About from "./cmp/about";
import Home from "./cmp/Home";
import Profile from "./assign2";
import { Route, BrowserRouter, Routes }from "react-router-dom";
import Layout from "./component/layout";
function App() {


  return (
    <div   >
      
      <div>
      
        <BrowserRouter>
        
  <Layout/>
        
        <Routes>
        
        <Route path="/worldranking" element={<Home/>}/>
        <Route path="/privacy" element={<Home/>}/>
        <Route path ='/terms' element={<Home/>}/>
    {/* <Route exact path="/"   element={<Home/>}/>
        
    <Route path="/About"   element={<About/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Profile/>}/> */}

    </Routes>
   
    
     
      
    
      </BrowserRouter>
      </div> 
      
    </div>
  );
}

export default App;
