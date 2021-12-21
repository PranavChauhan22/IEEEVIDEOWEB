import React from 'react'
import "./Menufinal.css"
function Menufinal() {
    return (
        <div className="menuaa">
            

<nav role="navigation" class="primary-navigation">
  <ul>
    <li><a href="#Contact">DSSYWC</a></li>
    <li><a href="#">Editions</a>
    <ul class="dropdown">
        <li><a href="/Editions">Newsletter</a></li>
        <li><a href="/Report">Articles</a></li>
        
      </ul>
    </li>
    <li><a href="/Events_Display">Events</a></li>
    <li><a href="/Reports_Display">Articles</a></li>
  </ul>
</nav>
        </div>
    )
}

export default Menufinal
