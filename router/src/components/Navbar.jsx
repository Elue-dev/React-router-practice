import '../components/Navbar.css'
import {Link} from 'react-router-dom'
import  React, {useState} from "react";

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handleClick = ()=>{
        setClicked(!clicked)
    }
    return(
        <div className="navbar">
            <Link to="/">
                <div className="logo">ROUTER</div>
            </Link>

            <div className="menu-icon" onClick = {handleClick}>
                 <i className={ clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

           <ul className={clicked ? "menu-list" : "menu-list active"}>
            {/* <ul className="menu-list"> */}
                <Link to = "/showcase">
                    <li>Showcase</li>
                </Link>

                <Link to = "/content">
                    <li>Content</li>
                </Link>

                <Link to = "/hero">
                    <li>Final</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar