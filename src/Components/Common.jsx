import React from "react";
import './Navbar.css';
import web from '../images/ind.webp'
import { NavLink } from "react-router-dom";

export default function Common(props){
    return(
        <>
             <section id="header">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 max-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <div className="mainText">
                            <h4 style={props.styling}>{props.name}</h4>
                                <h1>
                                    Grow your business with <strong className="brand">Onkar Chugh</strong>
                                </h1>
                                <h2 className="my-3">
                                    We are the team of telented developer making websites
                                </h2>

                                <div className="mt-4">
                                    <NavLink to={props.visit} className="btnn">{props.btnName}</NavLink>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img id="img" src={props.imgsrc} alt="Home img" />
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}