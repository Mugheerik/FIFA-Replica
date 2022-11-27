import Middletop from "./midtop";
import { useState } from "react";
const Row2 = () => {


    const info=[
        {id:1,title:"Football Untie's the World",description:"Mautidi: Football has the power to create a better world", img:"https://th.bing.com/th/id/R.d2fcf3e1a90822fa02e712b0e17b72ab?rik=lOEEtiQGGaU0Wg&pid=ImgRaw&r=0"},
        {id:2,title:"Football Untie's the World",description:"Mautidi: Football has the power to create a better world",img:"https://thedohaglobe.com/wp-content/uploads/2020/12/IlYfPmoxAKkL_1607527649.jpg"},
        {id:3,title:"Football Untie's the World",description:"Mautidi: Football has the power to create a better world",img:"https://th.bing.com/th/id/R.44c64a4671d2f64254f056ad5b9c5195?rik=DEAgVJOMS2Whig&pid=ImgRaw&r=0"},
        {id:4,title:"Football Untie's the World",description:"Ronaldo: Football has the power to create a better world",img:"https://th.bing.com/th/id/R.d2fcf3e1a90822fa02e712b0e17b72ab?rik=lOEEtiQGGaU0Wg&pid=ImgRaw&r=0"},
        {id:5,title:"Football Untie's the World",description:"Ronaldo: Football has the power to create a better world",img:"https://th.bing.com/th/id/R.d2fcf3e1a90822fa02e712b0e17b72ab?rik=lOEEtiQGGaU0Wg&pid=ImgRaw&r=0"},
        {id:6,title:"Football Untie's the World",description:"Ronaldo: Football has the power to create a better world",img:"https://th.bing.com/th/id/R.d2fcf3e1a90822fa02e712b0e17b72ab?rik=lOEEtiQGGaU0Wg&pid=ImgRaw&r=0"}
    ];

   
    const [display2,setDisplay2]=useState(info);
   const handleDelete=(id)=>{
    const newstate= info.filter((update)=>update.id!==id);
    setDisplay2(newstate);
   }

    return ( 
        <div className="container">

<div className="row  card-group ">
        {
            display2.map((infoo,key)=>{
return(
    
    <div className="col-4">
<div className="card   ">
    <div className="row">

    <div className="col-4 w-40">

<img src={infoo.img} style={{height:"50px"}} className="img-fluid rounded-start mt-4" alt="..."/>
    </div>
    <div className="col-8">
<div className="card-body" style={{fontSize:"10px"}}>

<b className="card-title">{infoo.title}</b>
<label className="card-text">{infoo.description}</label>
<button className="btn btn-danger" onClick={()=>handleDelete(infoo.id)} >DELETE</button>
   
</div>
    </div>
</div>
</div>


</div>
)
            })




        }
        </div>
        
 
            </div>
            
     );
}
 
export default Row2;