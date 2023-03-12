import React, { useState } from "react";

export default function Contact(){
const formSubmit = (e) => {
   e.preventDefault();
}

let [text , setText] = useState("")

let handleText = (event) => {
     setText(event.target.value)
}

let upperCase = () => {
  let newText = text.toUpperCase();
  setText(newText)
}

let loweCase = () => {
  let newText = text.toLowerCase();
  setText(newText)
}

let clearText = () => {
  let newText = "";
  setText(newText)
}

 return(
        <>
           <div className="my-5">
            <h1 className="text-center">Contact us</h1>
           </div>

           <div className="container contact_div">
           <div className="row">
           <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" name= "fullname"   className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1"  name= "phone"  className="form-label">Phone no.</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone no."/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1"  name= "mail"  className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" name= "message"  className="form-label">Your Message</label>
  <textarea value={text} onChange={handleText} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button type="button" className="btn btn-info ml-2">Submit</button>
<button type="button" onClick={upperCase} className="btn btn-primary ml-2">Upper case</button>
<button type="button" onClick={loweCase} className="btn btn-danger ml-2">Lower case</button>
<button type="button"  onClick={clearText} className="btn btn-info ml-2">Clear text</button>




            </form>
           </div>

           </div>

           </div>
        </>
    )
}