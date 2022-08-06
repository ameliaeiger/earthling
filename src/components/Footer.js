import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import { AppBar, IconButton } from "@mui/material"
import { BottomNavigation } from '@mui/material';

import "./Footer.css"


const Footer = () => {
    return (
        <div style={styles.footer}>
            <div className="buttonWrapper">
                <Button
                    className="navButton"
                    variant="outlined"
                    href="/">
                    Landing
                </Button>
                <Button 
                    className="navButton"
                    variant="outlined"
                    href="/dashboard">
                    Dash
                </Button>
            </div>
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
        position:"fixed",
        bottom:0,
        padding: "5px",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
        backgroundColor: "rgba(255,255,255, 0.2"
    },
    button: {
        height:"50px", 
        width:"10%", 
        backgroundColor:"rgba(255,255,255, 0.5)"
    },
    hover: {
        cursor:"pointer",
    },
  }

