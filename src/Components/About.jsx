import React from "react";
import Common from "./Common.jsx";
import web from '../images/ind.webp'

export default function About(){
    return(
        <>
            <Common styling = {{display: "inline-block", backgroundColor: "rgb(96, 200, 235)"  , marginLeft: "13px",  padding: "3px" , borderRadius: "5px"}}
            name = "Welcome to our about page"  imgsrc= {web} visit ="/contact" btnName = "Contact Now" />
        </>
    )
}