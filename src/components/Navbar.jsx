import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import {useState} from 'react';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    function toggle(){
        setIsOpen(!isOpen);
    }
    return (
        <>
        <nav className={styles.navbar}>
            <p className="display"> <Link to='/'> OUR BLOOMS </Link> </p>
            
            <ul className={styles.ul}>
                <li className="caption1" > <Link to='/gallery'> GALLERY </Link> </li>
                <li className="caption1" > <Link to='/about'> ABOUT </Link> </li>
                <li className="caption1">
                  <a href="mailto:dantehernandez587@gmail.com">CONTACT</a>
                </li>
            </ul>
        </nav>


        <nav className={styles.mobile_navbar}>
            <p className="display"> <Link to='/'> O.B </Link> </p>
            {isOpen? <X onClick={toggle}/>:<Menu onClick={toggle}/>}
            
        </nav>

        {/* This is a classical and gate example */}
        {isOpen && (
            <div> 
                <ul className={styles.mobile_ul}>
                <li className="caption1"  > <Link to='/gallery'> GALLERY </Link> </li>
                <li className="caption1" > <Link to='/about'> ABOUT </Link> </li>
                <li className="caption1">
                  <a href="mailto:dantehernandez587@gmail.com">CONTACT</a>
                </li>
            </ul>
            </div>)}
            
        
        <hr className='divider'/>
        </>
    )
}
export default Navbar;