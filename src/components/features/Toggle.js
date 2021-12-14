import { Transition, animated,config } from 'react-spring'
import React, { Component } from 'react'
import Textani from './Textani'
import "./stylee.css"
import { FaGlasses } from 'react-icons/fa'

export default class Toggle extends Component {
    constructor() {
        super()
    
        this.state = {
          toggle: 0,
        }
      }
    
      render() {
         
        const { toggle } = this.state
        return (
        
<div className="mac">

          <Transition
            items={toggle}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            reverse={toggle}
            delay={200}
            config={config.molasses}
            onRest={() =>
              this.setState({
                toggle: toggle+1
              })
            }>
            {({ opacity }, item) =>
              
              <animated.div
              style={{
                position: 'absolute',
                opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
              }}>
                {(toggle==0)&&<Textani data={"Mentors"}/>}
                        {(toggle==1)&&
                  <div className="hrflex">
              <div className="crdteam">
                <div className="igg2" />
                <h4 className="crdtext crdtext1">Garima Patel</h4>
                {/* <h4 className="crdtext crdtext2">Mentor</h4> */}
              </div>
                  
              <div className="crdteam">
                <div className="igg1" />
                <h4 className="crdtext crdtext1">J Ashwin Nair</h4>
                {/* <h4 className="crdtext crdtext2">Mentor</h4> */}
              </div>
           </div>
           }
                        {(toggle==2)&&
                         <Textani data={"Section Student Representative"}/>
                        }
                        {(toggle==3)&&
                   <div className="hrflex">
                   <div className="crdteam">
                     <div className="igg4" />
                     <h4 className="crdtext crdtext1">Piyush Kumar Sahoo</h4>
                     {/* <h4 className="crdtext crdtext3">Section Student Representative</h4> */}
                   </div>
                   <div className="crdteam">
                     <div className="igg3" />
                     <h4 className="crdtext crdtext1">Gagan Singh</h4>
                     {/* <h4 className="crdtext crdtext3">Section Student Representative</h4> */}
                   </div>
                   </div>}
                   {(toggle==4)&&
                         <Textani data={"Subection Student Representative"}/>
                        }
                        {(toggle==5)&&
                  <div className="hrflex">
                  <div className="crdteam">
                    <div className="igg30" />
                    <h4 className="crdtext crdtext1">Sharone Verma</h4>
                    <h6 className="bluebadge1">Chandigarh</h6>
                    {/* <h4 className="crdtext crdtext3">Subsection Representative</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg29" />
                    <h4 className="crdtext crdtext1">Shambhavi Khanna</h4>
                    <h6 className="bluebadge1">Rajasthan</h6>
                    {/* <h4 className="crdtext crdtext3">Subsection Representative</h4> */}
                  </div>
                  </div>}
                  {(toggle==6)&&
                         <Textani data={"Women In Engineering"}/>
                        }
                        {(toggle==7)&&
                   <div className="hrflex">
                   <div className="crdteam">
                     <div className="igg23" />
                     <h4 className="crdtext crdtext1">Pallavi Singh</h4>
                     <h6 className="bluebadge1">Lead</h6>
                     {/* <h4 className="crdtext crdtext2">WIE</h4> */}
                   </div>
                   <div className="crdteam">
                     <div className="igg32" />
                     <h4 className="crdtext crdtext1">Shubham Singla</h4>
                     {/* <h4 className="crdtext crdtext2">WIE</h4> */}
                   </div>
                   <div className="crdteam">
                     <div className="igg19" />
                     <h4 className="crdtext crdtext1">Khushu Kathuria</h4>
                     {/* <h4 className="crdtext crdtext2">WIE</h4> */}
                    
                   </div>
                   <div className="crdteam">
                     <div className="igg26" />
                     <h4 className="crdtext crdtext1">Priti Gangwar</h4>
                     {/* <h4 className="crdtext crdtext2">WIE</h4> */}
                   </div>
                   </div>}
                   {(toggle==8)&&
                         <Textani data={"Networking And Social Media"}/>
                 }
                        {(toggle==9)&&
                    <div className="hrflex">
                    <div className="crdteam">
                      <div className="igg22" />
                      <h4 className="crdtext crdtext1">Monalinka Kapoor</h4>
                      <h6 className="bluebadge1">Lead</h6>
                      {/* <h4 className="crdtext crdtext2">NSM</h4> */}
                    </div>
                    <div className="crdteam">
                      <div className="igg16" />
                      <h4 className="crdtext crdtext1">Hemang Sinha</h4>
                      {/* <h4 className="crdtext crdtext2">NSM</h4> */}
                    </div>
                    <div className="crdteam">
                      <div className="igg14" />
                      <h4 className="crdtext crdtext1">Divita Gulati</h4>
                      {/* <h4 className="crdtext crdtext2">NSM</h4> */}
                    </div>
                    <div className="crdteam">
                      <div className="igg17" />
                      <h4 className="crdtext crdtext1">Disha Vagrecha</h4>
                      {/* <h4 className="crdtext crdtext2">NSM</h4> */}
                    </div>
                    <div className="crdteam">
                      <div className="igg12" />
                      <h4 className="crdtext crdtext1">Ansh Dudeja</h4>
                      {/* <h4 className="crdtext crdtext2">NSM</h4> */}
                    </div>
                    <div className="crdteam">
                      <div className="igg13" />
                      <h4 className="crdtext crdtext1">Charu Kaushik</h4>
                      {/* <h4 className="crdtext crdtext2">NSM</h4> */}
                    </div>
                    
                    
                    </div>}
                    {(toggle==10)&&
                         <Textani data={"Technical Activities"}/>
                 }
                        {(toggle==11)&&
                    <div className="hrflex">
                    <div className="crdteam">
                      <div className="igg20" />
                      <h4 className="crdtext crdtext1">Priyansh Tyagi</h4>
                      <h6 className="bluebadge1">Lead</h6>
                      {/* <h4 className="crdtext crdtext2">TAC</h4> */}
                    </div>
                    <div className="crdteam">
                      <div className="igg15" />
                      <h4 className="crdtext crdtext1">Harshit Singh</h4>
                      {/* <h4 className="crdtext crdtext2">TAC</h4> */}
                    </div>
                    <div className="crdteam">
                      <div className="igg10" />
                      <h4 className="crdtext crdtext1">Aditi Tripathi</h4>
                      {/* <h4 className="crdtext crdtext2">TAC</h4> */}
                    </div>
                    <div className="crdteam">
                      <div className="igg27" />
                      <h4 className="crdtext crdtext1">Shaleen Poddar</h4>
                      {/* <h4 className="crdtext crdtext2">TAC</h4> */}
                    </div>
                    </div>}
                    {(toggle==12)&&
                         <Textani data={"Graphic Designing"}/>
                 }
                        {(toggle==13)&&
                         <div className="hrflex">
                         <div className="crdteam">
                           <div className="igg34" />
                           <h4 className="crdtext crdtext1">Vaibhav Srivastava</h4>
                           <h6 className="bluebadge1">Lead</h6>
                           {/* <h4 className="crdtext crdtext3">Graphic Designing</h4> */}
                         </div>
                         <div className="crdteam">
                           <div className="igg21" />
                           <h4 className="crdtext crdtext1">Manas Das</h4>
                           {/* <h4 className="crdtext crdtext3">Graphic Designing</h4> */}
                         </div>
                         <div className="crdteam">
                           <div className="igg28" />
                           <h4 className="crdtext crdtext1">Shalini Agarwal</h4>
                           {/* <h4 className="crdtext crdtext3">Graphic Designing</h4> */}
                         </div>
                         </div>

      }
      {(toggle==14)&&
                         <Textani data={"Editorial"}/>
                 }
                        {(toggle==15)&&
                        <div className="hrflex">
                        <div className="crdteam">
                          <div className="igg33" />
                          <h4 className="crdtext crdtext1">Tanisha Dhawan</h4>
                          <h6 className="bluebadge1">Lead</h6>
                          {/* <h4 className="crdtext crdtext3">Editorial</h4> */}
                        </div>
                        
                        <div className="crdteam">
                          <div className="igg11" />
                          <h4 className="crdtext crdtext1">Aishwarya Chand</h4>
                          {/* <h4 className="crdtext crdtext3">Editorial</h4> */}
                        </div>
                        
                        <div className="crdteam">
                          <div className="igg18" />
                          <h4 className="crdtext crdtext1">Kashish Garg</h4>
                          {/* <h4 className="crdtext crdtext3">Editorial</h4> */}
                        </div>
                        </div>

      }
      {(toggle==16)&&
                         <Textani data={"Web Administrator"}/>
                 }
                        {(toggle==17)&&
                         <div className="hrflex">
                         <div className="crdteam">
                           <div className="igg25" />
                           <h4 className="crdtext crdtext1">Pranav Chauhan</h4>
                           {/* <h4 className="crdtext crdtext3">Web Administrator</h4> */}
                         </div>
                         </div>

      }
      
     
      
           
                </animated.div>
              
            }
          </Transition>
          </div>
        )
      }
}

