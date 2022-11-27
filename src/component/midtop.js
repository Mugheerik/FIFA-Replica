import { useState } from "react";
import { Link } from "react-router-dom";
import Row2 from "./midtop2";

const Middletop = () => {

const news=[
    {id:1,title:"Football Untie's the World",description:"Mautidi: Football has the power to create a better world",date:"18 Nov 2022", img:"https://th.bing.com/th/id/R.d2fcf3e1a90822fa02e712b0e17b72ab?rik=lOEEtiQGGaU0Wg&pid=ImgRaw&r=0"},
    {id:2,title:"Football Untie's the World",description:"Mautidi: Football has the power to create a better world",date:"20 Nov 2022",img:"https://thedohaglobe.com/wp-content/uploads/2020/12/IlYfPmoxAKkL_1607527649.jpg"},
    // {id:3,title:"Football Untie's the World",description:"Mautidi: Football has the power to create a better world",date:"22 Nov 2022",img:"https://th.bing.com/th/id/R.d2fcf3e1a90822fa02e712b0e17b72ab?rik=lOEEtiQGGaU0Wg&pid=ImgRaw&r=0"},
    {id:3,title:"Football Untie's the World",description:"Mautidi: Football has the power to create a better world",date:"22 Nov 2022",img:"https://th.bing.com/th/id/R.44c64a4671d2f64254f056ad5b9c5195?rik=DEAgVJOMS2Whig&pid=ImgRaw&r=0"}
];
const [display1,setDisplay1]=useState(news);

// const handledelete=(id)=>{
//     const newdisplay= display1.filter((items)=>items.id!=id);
//     setDisplay1(newdisplay);
// }

    return ( 

        <div className="container " >
             <div className="row pt-3">
                <div className="col-3" >
                      <label style={{fontSize:"14px" ,color:"white"}}>Football Unite's The World</label>
                      <label style={{fontSize:"10px",lineHeight:1.5 ,color:"white"}}>Football Unites the World is global movement to inspire,unite and develop through Football</label>
                      <Link className="link" to='./t'> More From this Topic</Link>
                </div>
              <div className="col-9">

                 <div className="card-group">
                
                {
                    display1.map((data,key)=>{
                        return(
                           
                            <div className="card m-1 w-70 " style={{lineHeight:1 }} key={data.id} >
  <img src={data.img}  style={{height:"40%"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{fontSize:"12px"}}> {data.title}</h5>
    <p class="card-text"><b style={{fontSize:"10px"}}>{data.description}</b></p>
    <span className="card-text"  style={{fontSize:"9px"}}> {data.date}</span>
 {/* <button  class="btn btn-primary" onClick={()=>handledelete(data.id)}>delete</button>  */}
  </div>
</div>
                            )
                            
                        })
                    }
                
                    </div>
                    <div className="container" style={{borderTop:"1px solid black"}}>

                      <label>More</label>
                      
                    </div>
                    </div>
                    </div>
                    <div className="row">
                    <div>
                        <Row2/>
                      </div>
                    </div>
                    </div>
                   
                    
                    
              
            
        
     );
}
 
export default Middletop;