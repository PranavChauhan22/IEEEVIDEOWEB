import React from "react";
import "./Menufinal.css";
import logo1 from "../logos/dslogo.png";
import logo2 from "../logos/ieeelogo.png";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";

import { Link } from "react-scroll";
function Menufinal() {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="flexhor">
        <img src={logo1} className="Logo1" />

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={10}
          style={{ cursor: "pointer" }}
          className="headtext"
        >
          About
        </Link>
        <div className="a_a_team">
          <Menu
            menuButton={
              <MenuButton style={{ fontWeight: "600" }}>IEEE SSN</MenuButton>
            }
          >
            <MenuItem>
              <a href="#IEEEDELHISSN_TEAM3" className="a_team">
                SSN 2021-2022
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#IEEEDELHISSN_TEAM" className="a_team">
                SSN 2022-2023
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#IEEEDELHISSN_TEAM2" className="a_team">
                SSN 2023-2024
              </a>
            </MenuItem>
          </Menu>
        </div>
        <Link
          activeClass="active"
          to="events"
          spy={true}
          smooth={true}
          offset={-100}
          duration={10}
          style={{ cursor: "pointer" }}
          className="headtext"
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
          style={{ cursor: "pointer" }}
          className="headtext"
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
          style={{ cursor: "pointer" }}
          className="headtext"
        >
          Contact
        </Link>

        <a href="#Editions" className="headtext">
          Newsletter
        </a>
        <a href="#Report" className="headtext">
          Articles
        </a>
        <a href="https://www.dssywc.in/" className="headtext" target={"_blank"}>
          DSSYWC
        </a>
      </div>
      <img src={logo2} className="Logo2" />
    </div>
  );
}

export default Menufinal;
