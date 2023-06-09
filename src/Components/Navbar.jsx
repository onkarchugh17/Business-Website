import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"

export default function Navbar(props){
    return(
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.clr} bg-${props.clr}`}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink style={props.istyle}  className="nav-Link active " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={props.istyle}   className="nav-Link" to="/service">Service</NavLink>
        </li>

        <li className="nav-item">
          <NavLink style={props.istyle}  className="nav-Link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink style={props.istyle}  className="nav-Link" to="contact">Contact</NavLink>
        </li>
        
        
      </ul>

      <div >
        
        <a href="/"><img src={facebook} alt="" style={{width : "35px", marginRight : "12px"}} /></a>
        <a href="/"><img src={instagram} alt="" style={{width : "35px", marginRight : "12px"}} /></a>
        <a href="/"><img src={twitter} alt="" style={{width : "35px", marginRight : "12px"}} /></a>
        <a href="/"><img src={linkedin} alt="" style={{width : "35px", marginRight : "18px"}} /></a>
        
      </div>

      <div className="form-check form-switch">
  <input style={props.istyle} className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label style={props.istyle} className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.utext}</label>
</div>

      
    </div>
  </div>
</nav>
        </>
    )
}