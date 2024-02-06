import React, { useEffect, useState } from "react";
import axios from "axios";
import BarWave from "react-cssfx-loading/lib/BarWave";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import "./Events.css";
import img3 from "../components_images/cyber1.png";
import AccordionExampleStyled from "./Eventsaccord";

function Events() {
  const [data, setdata] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/123foRm_hleTda1CuvvjFEyXsmcfp5-gJjsps_J4NSAc/Sheet1"
      )
      .then((resp) => {
        setdata(() => resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  if (data.data === undefined) {
    return (
    <div>
           <h1 className="eventnamehead"> Events</h1>
      <BarWave className="loadanime"/>
    </div>
      )
  }
  return (
    <div className="dispverflex" id="events">
      
      <h1 className="eventnamehead"> Events</h1>
      <div className="container">
        {data.data.map(
          (src) =>
            src["Number"] === 1 && (
              <div key={src["Entry ID"]} className="carde">
                <img
                  src={`https://drive.google.com/thumbnail?id=${src["Event Poster(Id of Drive Link)"]}`}
                  className="eventcardimg"
                 alt=""/>
                <div className="box-shadow">

                <div className="eventshorflex">
                  <BsFillCalendarCheckFill className="caleven" />
                  <div className="eventsdate">{src["Event Date"]}</div>
                </div>
                <div className="eventshoflex">
                  <div className={src["Event Name"].length>20?"eeventname":"eventname"}>{src["Event Name"]}</div>
                  <a href={src["Social Media Link"]} target={"_blank"} rel="noreferrer">
                    <IoShareSocialSharp className="shareicon" />
                  </a>
                </div>
                <div className="eventsb">{src["Student Branch"]}</div>
                <div className="eventsdesc">
                  <AccordionExampleStyled dt={src["Event Description"]} />
                </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Events;
// {`https://drive.google.com/thumbnail?id=${src.Event Poster(Id of Drive Link)}`}
// Event Poster(Id of Drive Link)
