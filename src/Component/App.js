import React from "react"
import Navbar from "./Navbar.js"
// import Content from "./Content.js"
import Footer from "./Footer.js"
// import Jsondata from "./Jsondata.js"
import Fetchdata from "./Fetchdata"


function App(){
    return (
        <div>
          <Navbar></Navbar>
          {/* <Jsondata></Jsondata> */}
          {/* <Content></Content> */}
          <Fetchdata></Fetchdata>
          <Footer></Footer> 
          
        </div>
    )
}

export default App
