import { Link } from "react-router-dom";
import './navbar.css'
import Secondmenu from "./secmenu";
const Navbar = () => {



    return ( 
        <div classNameName="container ">
           <div className="navv">

            <nav className="navbar navbar-expand ">
 
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button> */}

  <div className="collapse navbar-collapse align-text-center" id="navbarSupportedContent">

   
 
           <ul className="navbar-nav ms-5">

           <li className="nav-item ps-4">

        <img className=" rounded float-end ms-5  " src= "https://lofrev.net/wp-content/photos/2014/11/fifa_logo-640x216.png"
        style={{width:"8vw",height:"8vh"}}  alt="none" /> 
        </li>
       
     <li className="nav-item ms-5  mt-3">
     
        <img className="nav-item rounded  ms-5 " src= "https://th.bing.com/th/id/R.977f27482448ac36e137573ae08385f1?rik=zRyr6h4R%2bftdHA&riu=http%3a%2f%2fdgipo-cespd.edomex.gob.mx%2fhtas%2fimgs%2fbuscar.jpg&ehk=0o99%2fIG7gbOe2qIQMlz3CJbi2Yi0fAj3dKk4n3ZkRJE%3d&risl=&pid=ImgRaw&r=0"
        style={{width:"3vw",height:"5vh"}}  alt="none" /> 
        </li>
     <li className="nav-item ps-3 mt-3">
      <span> Store</span>
        
        </li>
     <li className="nav-item ps-2 mt-3">
   <span>Tickets</span>
        
        </li>
     <li className="nav-item ps-2 mt-3">
     <span>Login</span>
        
        </li>

      
           </ul>
        
       
        </div>
    
   
  
            
</nav>
        </div>
       
    

       <Secondmenu/>
       
      
           
        </div>
        
     );
}
 
export default Navbar;