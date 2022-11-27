import { useState } from "react";
import { Link } from "react-router-dom";

const Midbtm = () => {
const menr=[
    {id:1, country:"Brazil",points:1944.12,image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png"},
    {id:2, country:"Belgium",points:1864.42,image:"https://th.bing.com/th/id/OIP.r5rI12IRegoZdyTKM4HO-wHaE9?pid=ImgDet&rs=1"},
    {id:3, country:"Argentina",points:1747.2,image:"https://th.bing.com/th/id/R.43baed6f323b59411c0d75b2053d68e1?rik=H3dWsBZzF243tw&pid=ImgRaw&r=0"},
    {id:4, country:"France",points:1666.72,image:"https://th.bing.com/th/id/R.395e8050f705ec1fddc5d11c80c64275?rik=gi%2b4Zv7x5IVI1A&pid=ImgRaw&r=0"},
    {id:5, country:"England",points:1644.12,image:"https://th.bing.com/th/id/R.2ae9df0804d3346e2908667e87203756?rik=0CsizKjwu274BA&riu=http%3a%2f%2fwww.flagz.co.nz%2fwp-content%2fuploads%2f2013%2f08%2fengland-flag-750x505.png&ehk=gmr6iHkGq5mR1T77OIbLmIYnESJmfKAuIr8nAmrI30w%3d&risl=&pid=ImgRaw&r=0"},
];
const[men,setMen]=useState(menr);

    return ( 

        <div className="container">
            <div className="row">
             <div className="col-3">
                    <label><b>WORLD RANKING</b></label>
                    <p>The Official world Ranking of international  Mens and Womens teams</p>
                    <Link > FIFA/Coca-Cola World Ranking</Link>
                </div>
                <div className="col-4">
                   <p style={{fontSize:"12px"}}><b>MEN</b></p>
                   <table>
                    <tr>
                    <th  style={{fontSize:"10px"}}>RK</th>
                    <th  style={{fontSize:"10px"}} className="ps-2">Team</th>
                    <th  style={{fontSize:"10px"}} className="ps-2" >Total Points</th>
                    </tr>
                    {
                        men.map((rank ,key)=>{
                            return(

                                <tr  style={{fontSize:"12px"}} className="mt-3" key={rank.id} >
                                <td className="pt-3">{rank.id}</td>
                                <td  className="pt-3"><span><img src={rank.image} alt="" style={{width:"3vw",height:"3vh"}}/> {rank.country}</span></td>
                                <td className=" pt-3 ps-4">{rank.points}</td>
                            </tr>
                                )
                        })
                    }
                   </table>
                   <label style={{fontSize:"10px"}} className="mt-4"> Updated 23 Nov 2022 </label><br/>
                   <Link  style={{fontSize:"10px"}} > Check Full Mens ranking table</Link>
                </div>
                <div className="col-4">
                <p style={{fontSize:"12px"}}><b>WOMEN</b></p>
                   <table>
                    <tr>
                    <th  style={{fontSize:"10px"}}>RK</th>
                    <th  style={{fontSize:"10px"}} className="ps-2">Team</th>
                    <th  style={{fontSize:"10px"}} className="ps-2" >Total Points</th>
                    </tr>
                    {
                        men.map((rank ,key)=>{
                            return(

                                <tr style={{fontSize:"12px"}} className="mt-2" key={rank.id} >
                                <td className="pt-3" >{rank.id}</td>
                                <td className="pt-3" ><label  className=""><img src={rank.image} alt="" style={{width:"3vw",height:"3vh"}}/> {rank.country}</label></td>
                                <td className="ps-4 pt-3">{rank.points}</td>
                            </tr>
                                )
                        })
                    }
                   </table>
                   <label style={{fontSize:"10px"}}  className="mt-4"> Updated 23 Nov 2022 </label><br/>
                   <Link style={{fontSize:"10px"}} > Check Full Mens ranking table</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Midbtm;