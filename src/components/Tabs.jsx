import React from 'react';
import TabButton from './TabButton';
function Tabs({children,buttons}) {
   
    return <>
     <menu>
         {buttons}
      </menu>   
     {children}
    </>
    
}

export default Tabs;
