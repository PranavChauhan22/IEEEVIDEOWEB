import React from "react";
import "./Menufinal.css";
import logo1 from "../logos/dslogo.png";
import logo2 from "../logos/ieeelogo.png";

import { Link } from "react-scroll";
function Menufinal() {
  return (
    <div>

        <div className="flexhor">
        <img src={logo1} className="Logo1" />
       
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              style={{cursor:"pointer"}} className="headtext"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              style={{cursor:"pointer"}} className="headtext"
            >
              Events
            </Link>
            
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              style={{cursor:"pointer"}} className="headtext"
            >
              Gallery
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              style={{cursor:"pointer"}} className="headtext"
            >
              Contact
            </Link>
            
        
          <a  href="#Editions" className="headtext">Newsletter</a>
        <a href="#Report" className="headtext">Articles</a>

        </div>
        <img src={logo2} className="Logo2" />
    
    </div>
  );
}

export default Menufinal;
