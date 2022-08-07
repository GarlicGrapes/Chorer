import React from "react";
import {NavLink} from "react-router-dom";


function NavBar() {


  return(
    <div className="navbar">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/createchore"> Create Chore </NavLink>
      <NavLink to="/login"> Login </NavLink>
    </div>
  )
}

export default NavBar;