import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import {Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { useState } from 'react';
import Alert from './Components/Alert';




function App() {

  let[ialert , newalert] = useState(null)

  setTimeout(()=>{
    newalert(null)
  }, 2000)

  
  

  
  let [mode , newMode] = useState("light")
  let [itext , nextext] = useState("Enable Dark Mode")
  let [istyle , newstyle] = useState({
    color:"black"
  })

  
  
  
  let toggle = () => {
      if(mode == "light"){
        newMode('dark')
        nextext("Enable Light mode")
        newstyle({
          color: "white"
        })
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        newalert("Dark mode enabled")
       

       
     
        

        
      }

      else{newMode("light") 
      nextext("Enable Dark mode")
      newstyle({
        color:"black"
      })
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      newalert("Light mode enabled")
     
      
    }
  }


    
  return (
    <>
    <Navbar utext={itext} istyle={istyle} clr={mode} toggle= {toggle}/>
    <Alert alert={ialert}/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/service' element={<Service />} />
      {/* <Navigate to="/" /> */}

    </Routes>

    </>
       
   
  );
}

export default App;
