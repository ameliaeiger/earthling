import React, {useState} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Globe from "../components/Globe"

//ASSETS

const LandingPage = ({ image, dimensions}) => {
    return (
      <div style={{height:dimensions.availHeight, width:dimensions.availWidth, backgroundImage:`url(${image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", alignItems:"space-between"}}>
        <Header />
        <Globe
            />
        <Footer />
    </div>
    )
  }

  export default LandingPage