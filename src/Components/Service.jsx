import React from "react";
import Card from "./Card";
import Data from "./Data";
import "./Service.css"

export default function Service() {



    return (
        <>
            <div className="my-3">
                <h1 className="text-center">Our Services</h1>
                </div>

                <div className=" container-fluid mtmt ">
                    <div className="row">
                        <div className="col-10 max-auto mlml">
                            <div className="row gy-4 css" style={{color: "black"}} >
                                {
                                    Data.map((element , index)=>{
                                       
                                      return  <Card key={index}
                                      
                                        imgSrc ={element.imgsrc}
                                         title={element.title}
                                         disc ={element.disc}
                                         
                                          />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </>
    )
}