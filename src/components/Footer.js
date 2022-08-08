import React from "react"
import Button from "@mui/material/Button"
import "./Footer.css"


const Footer = () => {
    return (
            <div className="buttonWrapper">
                <Button 
                    className="navButton"
                    variant="outlined"
                    href="/dashboard">
                    Let's Go!
                </Button>
            </div>
    )
}

export default Footer

const styles = {
    footer:{
        minHeight:"7vh",
        width:"100vw", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bottom:0,
        padding: "5px",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
    },
    hover: {
        cursor:"pointer",
    },
  }

