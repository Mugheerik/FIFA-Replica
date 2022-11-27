import { Link } from 'react-router-dom';
import Home from '../cmp/Home';
import './sec.css'
const Secondmenu = () => {


    return ( 
<div className='ff'>

        <nav className="navbar navbar-expand " >
  <div className=" container ">

        <ul className="dd navbar-nav">
            <li className="nav-item ps-2"  >
                <b>TOURNMENTS ON FIFA+</b>
            </li>
            <li className="nav-item ps-2">
                <b>About FIFA</b>
            </li>
            <li className="nav-item ps-2">
                <b>WOMEN'S FOOTBALL</b>
            </li>
            <li className="nav-item ps-2">
                <b>SOCIAL IMAPCT</b>
            </li>
            <li className="nav-item ps-2">
                <b>FOOTBALL DEVELOPMENT</b>
            </li>
            <li className="nav-item ps-2">
                <b>TECHNICAL </b>
            </li>
            <li className="nav-item ps-2 opensubb">
                <b>LEGAL</b>
        <div className='subb'>
            <div className='row'>
                <div className='col-6'>
                    <label><Link to='/privacy'> Privacy</Link></label>
                </div>
                <div className='col-6'>
                    <label><Link to='/terms'> Terms</Link></label>
                </div>
            </div>
        </div>

            </li>
            <li className="nav-item ps-2 opensub">
               <Link to='/worldrank' className='link'> <b>  WORLD'S RANKING</b></Link>
               <div className='sub row'>
                <ul className='navbar-nav' >
                    <li className='nav-item'>
                        <b>MEN'S RANKING</b>
                    </li>
                    <li className='nav-item'>
                        <b>WOMEN'S RANKING</b>
                    </li>
                    <li className='nav-item'>
                        <b>NEWS</b>
                    </li>
                    <li className='nav-item'>
                        <b>MEN'S RANKING PROCEDUES</b>
                    </li>
                    <li className='nav-item'>
                        <b>WOMEN'S RANKING PROCEDUES</b>
                    </li>
                </ul>
               </div>
            </li>
        </ul>
  </div>
        </nav>

</div>
     );
}
 
export default Secondmenu;