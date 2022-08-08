import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import { AppBar, IconButton,  } from "@mui/material"

import "./Header.css"
import alien from "../assets/alien.png"


const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(setIsLoaded(true), 1000)
    },[])

    return (
        <div className="appBarWrapper">
            {/* <AppBar
                style={styles.navbar}>
                    <img 
                        src={alien}
                        style={styles.alien}/>
                <div className={!isLoaded ? "greetingText" : "greetingText appear"}>
                    greetings, earthling!               
                </div>
            </AppBar> */}

            <div style={styles.navbar}>
                <img src={alien} style={styles.alien}/>
                <div className={!isLoaded ? "greetingText" : "greetingText appear"}>
                greetings, earthling! </div>
            </div>
        </div>
    )
}

export default Header

const styles = {
    navbar: {
        display: "flex",
        flexDirection:"row-reverse",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        minHeight: "10vh", 
        backgroundColor: "rgba(255,255,255, 0)",
        // borderBottomRightRadius:"10px",
        // borderBottomLeftRadius:"10px",
    },
    alien: {
        display:"flex",
        margin:"0px 0px 0px 10px",
        padding:"0px",
        backgroundColor:"rgba(128, 230, 49, .9)",
        boxShadow:"0px 0px 10px rgba(128, 230, 49, 1), 0px 0px 20px rgba(128, 230, 49, .5), 0px 0px 30px rgba(128, 230, 49, .5), 0px 0px 40px rgba(128, 230, 49, 1), 0px 0px 50px rgba(128, 230, 49, 1), 0px 0px 100px rgba(128, 230, 49, 1), 0px 0px 150px white"
    },
  }