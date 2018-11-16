import React from 'react';
import Dropdown from './Dropdown'
import Dropcont from './Drop-cont'
const links=[
    {
        link:"Home"
    },
    {
        link:"Services",
        statut: "isshown"
    },
    {
        link:"Contact"
    }
]
const Navbar = (props) => {
    return <div className="header-links">
     {links.map((elm,i)=>
     <div className={`${elm.statut} navBar-link`}>
     <Dropdown key={i} navbar={elm}/>
     {elm.statut && <Dropcont/>}
     </div>
     )} 
     
     </div>
  };
  export default Navbar