import Footer from './footer';
import './layout.css'
import Leftside from './leftside';
import Midbtm from './midbottom';
import Middletop from './midtop';
import Navbar from './Navbar';
const Layout = () => {


    return ( 
      
        <div className="container">
            <div className="row " style={{backgroudColor:"white"}}>
                <div className="col-12 ">
                    {/* <h1>header</h1> */}
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                <div className="col-3 ">
              {/* <h1>side bar</h1> */}
              <Leftside/>
                </div>
                <div className="col-9 ">
                    <div className="row mt-4" style={{backgroundColor:"rgb(42, 159, 255)"}}>
                        <div className="col-12 " >
                            
                          <Middletop/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 ">
                         {/* <h3>mid botom</h3> */}
                         <Midbtm/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 '>
                    {/* <h1>footer</h1> */}
                    <Footer/>
                </div>
            </div>
        </div>


     );
}
 
export default Layout;