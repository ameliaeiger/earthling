import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Globe from "../components/Globe"

//ASSETS
import image from "../assets/stars.jpg"

const LandingPage = () => {
    return (
        <div className="App" style={{display:"flex", flexDirection:"column", minHeight:"100vh", minWidth:"100%", backgroundImage:`url(${image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", alignItems:"center"}}>
            <Header />
            <Globe />
            <Footer />
        </div>
    )
  }

  export default LandingPage