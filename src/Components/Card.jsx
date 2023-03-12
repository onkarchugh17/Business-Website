import React from "react";
import { NavLink } from "react-router-dom";
export default function Card(props) {

    return (

        <>
            <div className="col-md-4 mt-3 col-10 mx-auto">

                <div className="card">
                    <img src={props.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.disc}</p>
                        <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>


            </div>
        </>
    )




}