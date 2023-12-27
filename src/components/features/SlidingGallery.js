import React from "react";
import "./SlidingGallery.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import rgimg from "../features/gridimages/Rachana_ma'am.jpg";
import raimg from "../features/gridimages2/Dr. Rashmi Agarwal.jpeg";
import sjimg from "../features/gridimages2/Dr. Shruti Jain.jpg";
import jmimg from "../features/gridimages2/Jeetu mam.jpeg";
import aqimg from "../features/gridimages2/ansari.jpeg";

function SlidingGallery() {
  return (
    <div>
      <div className="sac_22_head">
        Student Activities Committee <span className="bluefon">2022-23</span>
      </div>

      <div className="card_sac_ssn">
        <div class="slide-card">
          <div class="slide-card-content">
            <div class="image">
              <img src={aqimg} />
            </div>

            <div class="media-icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-github"></i>
            </div>

            <div class="name">Dr. A.Q. Ansari </div>
            <button class="aboutMe">Section Chair</button>
          </div>
        </div>
        <div class="slide-card">
          <div class="slide-card-content">
            <div class="image">
              <img src={rgimg} />
            </div>

            <div class="media-icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-github"></i>
            </div>

            <div class="name">Prof. Rachana Garg </div>
            <button class="aboutMe">SAC Chair</button>
          </div>
        </div>
        <div class="slide-card">
          <div class="slide-card-content">
            <div class="image">
              <img src={raimg} />
            </div>

            <div class="media-icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-github"></i>
            </div>

            <div class="name">Prof. Rashmi Agarwal</div>
            <button class="aboutMe">SAC Member</button>
          </div>
        </div>
        <div class="slide-card">
          <div class="slide-card-content">
            <div class="image">
              <img src={jmimg} />
            </div>

            <div class="media-icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-github"></i>
            </div>

            <div class="name">Prof. Jeetu Sharma</div>
            <button class="aboutMe">SAC Member</button>
          </div>
        </div>
        <div class="slide-card">
          <div class="slide-card-content">
            <div class="image">
              <img src={sjimg} />
            </div>

            <div class="media-icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-github"></i>
            </div>

            <div class="name">Prof. Shruti Jain</div>
            <button class="aboutMe">SAC Member</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlidingGallery;
