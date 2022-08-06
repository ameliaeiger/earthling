import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import { AppBar, IconButton,  } from "@mui/material"

import "./Header.css"
import alien from "../assets/alien.png"


const Header = () => {
    return (
        <div className="appBarWrapper">
            <AppBar
                style={styles.navbar}>
                <img 
                    src={alien}
                    style={styles.alien}/>
                <div className="greetingText">greetings, earthling!</div>
            </AppBar>
        </div>
    )
}

export default Header

const styles = {
    navbar: {
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        minHeight: "10vh", 
        backgroundColor: "rgba(255,255,255, 0.2)",
    },
    alien: {
        margin:"0px",
        padding:"0px"
    }
  }