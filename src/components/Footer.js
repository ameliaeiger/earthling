import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import { AppBar, IconButton } from "@mui/material"
import { BottomNavigation } from '@mui/material';

import "./Footer.css"


const Footer = () => {
    return (
        <div className="bottom-wrapper">
            <button>
                Hello, World
            </button>
        </div>
    )
}

export default Footer

const styles = {
    navbar: {
        display: "flex",
        alignItems: "center",
        padding: "5px",
        minHeight: 100, 
        backgroundColor: "rgba(255,255,255, 0.5)",
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

