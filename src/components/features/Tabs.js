import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import "./stylee.css"
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

import TwoColWithButtonver2 from './TwoColWithButtonver2';
import TwoColWithButton from './TwoColWithButton';


export const TabViewDemo = () => {


    return (
        <div className="tabview-demo">
            <div className="card">
                <TabView>
                    <TabPanel header="IEEE DELHI SSN 2021-2022">
                       <TwoColWithButtonver2/>
                    </TabPanel>
                    <TabPanel header="IEEE DELHI SSN 2022-2023">
                        <TwoColWithButton/>
                    </TabPanel>
                 
                </TabView>
            </div>

            
        </div>
    )
}
                
