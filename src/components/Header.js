import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import { AppBar, IconButton } from "@mui/material"


const Header = () => {
    return (
        <div>
            <AppBar
                style={styles.navbar}>
                <IconButton
                    edge="start">
                    <Button
                        variant="contained"
                        href="/">
                        Landing
                    </Button>
                </IconButton>
                <IconButton
                    edge="start">
                    <Button 
                        variant="contained"
                        href="/dashboard">
                        Dash
                    </Button>
                </IconButton>
            </AppBar>

        </div>
    )
}

export default Header

const styles = {
    navbar: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        minHeight: "10vh", 
        backgroundColor: "rgba(255,255,255, 0.5)",
    },
    button: {

    }
  }