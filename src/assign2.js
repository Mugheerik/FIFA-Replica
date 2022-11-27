import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


 


      
        
        function  Profile (){
            const firstState=[
                {id:1,name:"mugheer", Image:"https://th.bing.com/th/id/OIP.tx131ehKnkVPSTo8ymdphQHaGC?pid=ImgDet&w=4121&h=3364&rs=1" },
                {id:2,name:"Ali",Image:"https://th.bing.com/th/id/OIP.tx131ehKnkVPSTo8ymdphQHaGC?pid=ImgDet&w=4121&h=3364&rs=1" },
                {id:3,name:"Ahmed", Image:"https://th.bing.com/th/id/OIP.tx131ehKnkVPSTo8ymdphQHaGC?pid=ImgDet&w=4121&h=3364&rs=1"}
                
             ]

            const [state,setState]=useState(firstState);
            

            // const  handleDlete=(profileId)=> {

            //     const filterData=state.filter((userData)=>userData.id!==profileId);
            //    setState(filterData)
            // }

         
        
        state.map((user,key) =>{

return(
    
     
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={user.Image} />
              <Card.Body>
              
                <Card.Title>key={user.id}</Card.Title>
                <Card.Text>
                 {user.name}
                </Card.Text>
                <Button variant="danger" >Delete</Button>
              </Card.Body>
            </Card>
          );
        }
      )
     
}

export default  Profile;
 
