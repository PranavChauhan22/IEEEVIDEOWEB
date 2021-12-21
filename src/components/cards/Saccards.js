import React from 'react'
import "./Saccards.css"
import img1 from "../features/gridimages/Rachana_ma'am.jpg"
import img2 from "../features/gridimages/Rashmi Agarwal.jpeg"
import img3 from "../features/gridimages/Meenu Khurana_Chandigarsh_sub-sec.jpeg"
import img4 from "../features/gridimages/Mahesh_jangid.jpeg"
import img5 from "../features/gridimages/Archit goswami.jpeg"
function Saccards() {
    return (
        <div className="sacgrid">
            <ul class="cards">
  <li>


    <a href="" class="card saclead">
      <img src={img1} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          <div class="card__header-text">
            <h2 class="card__title">Prof. Rachana Garg</h2>            
            <span class="card__status">Section Chair and Student Activities Committee Chair</span>
          </div>
        </div>
        {/* <p class="card__description">Dr. Rachana Garg is currently serving as a Section Chair and SAC Chair at IEEE DELHI SSN.</p> */}
      </div>
    </a>      
  
  </li>
  <br></br>
  <li>
    <a href="" class="card">
      <img src={img3} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
  
          <div class="card__header-text">
            <h3 class="card__title">Dr. Meenu Khurana</h3>
            <span class="card__status">Student Activities Committee Member</span>            
          </div>
        </div>
        {/* <p class="card__description">Dr. Meenu Khurana is currently serving as a SAC Member at IEEE DELHI SSN</p> */}
      </div>
    </a>
  </li>
 
  <li>
    <a href="" class="card">
      <img src={img2} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
     
          <div class="card__header-text">
            <h3 class="card__title">Dr. Rashmi Agarwal</h3>
            <span class="card__status">Student Activities Committee Member</span>
          </div>
        </div>
        {/* <p class="card__description">Dr. Rashmi Agarwal is currently serving as a SAC Member at IEEE DELHI SSN</p> */}
      </div>
    </a>
  </li>
  <li>
    <a href="" class="cdcard">
      <img src={img4} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          
          <div class="card__header-text">
            <h3 class="card__title">Dr. Mahesh Jangid</h3>
            <span class="card__status">Student Activities Committee Member</span>
          </div>          
        </div>
        {/* <p class="card__description">Dr. Mahesh Jangid is currently serving as a SAC Member at IEEE DELHI SSN</p> */}
      </div>
    </a>
  </li>    
  <li>
    <a href="" class="cdcard1">
      <img src={img5} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
    
          <div class="card__header-text">
            <h3 class="card__title">Mr. Archit Goswami</h3>
            <span class="card__status">Student Activities Committee Member</span>
          </div>          
        </div>
        {/* <p class="card__description">Mr. Archit Goswami is currently serving as a SAC Member at IEEE DELHI SSN</p> */}
      </div>
    </a>
  </li>    
</ul>
        </div>
    )
}

export default Saccards
