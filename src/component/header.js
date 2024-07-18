import React from "react";
import './comp.css';
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <div> 
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <a className="navbar-brand" href="#myPage">Lorem ipsum</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/about'>ABOUT</Link></li>
                            <li><Link to='/services'>SERVICES</Link></li>
                            <li><Link to='/portfolio'>PORTFOLIO</Link></li>
                            <li><Link to='/pricing'>PRICING</Link></li>
                            <li><Link to='/contact'>CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            
           
        </div>
    );
}

export default Header; // Export the Header component
