import React from 'react';
import Layouttest from '../components/Test/Layouttest';


const VerticleTabs = () => {
    return (
        
        <Layouttest 
            tabs={[
              {
                  tabName: "Tab one",                                
                  tabContent: (
                    <h1> inject you'r  component here  </h1>
                  )
              },
              {
                  tabName: "Tab two",
        
                  tabContent: (
                      <h1>Tab ___ 2 </h1>
                  )
              },
              {
                  tabName: "Tab Three",
                  tabContent: (
                      <h1>Tab __ 3</h1>
                  )
              },
        
        
              {
                  tabName: "Tab Four",
                  tabContent: (
                      <h1>Tab __ 4</h1>
                  )
              },
             
        
        
          ]}
        
        
        
        
        
        
        
            />




    );
}

export default VerticleTabs;