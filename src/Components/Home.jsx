import React from "react";
import './Navbar.css';
import web from '../images/ind.webp'
import { NavLink } from "react-router-dom";
import Common from "./Common.jsx";


export default function Home(){
    return(
        <>
              <Common  styling = {{display: "none"}} imgsrc= {web} visit ="/service" btnName = "Get Started" />
        </>
    )
}