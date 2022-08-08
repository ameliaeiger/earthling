import React from "react"
import "./Dashboard.css"
import Button from "@mui/material/Button"

//COMPONENTS
import Header from "../components/Header"
import NEO from "../components/NEO"
import POD from "../components/POD"
import Alert from "../components/Alert"
import Search from "../components/Search"
import { fontFamily } from "@mui/system"

const DashboardPage = ({date, startDate, data, apodData}) => {


    return (
        <div className="dashboardWrapper">
            <Header />
            <div className="dashboard" style={styles.pageWrapper}>
                <div style={styles.grid}>
                    <Alert neoData={data.near_earth_objects} startDate={startDate} />
                    <Search />
                    <NEO data={data} date={date} startDate={startDate} />
                    <POD apodData={apodData} />   
                    <Button 
                        style={styles.homeButton}
                        variant="outlined"
                        href="/">
                        BACK
                    </Button>   
                </div>
            </div>
        </div>
    )
  }

  export default DashboardPage

  const styles = {
    homeButton: {
        color: "black",
        fontFamily:"earthling",
        fontSize:"20px",
        borderRadius:"50px",
        border: "2px solid rgba(255,255,255, 0.5)",
        backgroundColor: "rgba(255,255,255, 0.8)",    
        gridColumn:"3 / span 2",
        gridRow:"5",
        width:"80%",
        height:"80%",
    },
    pageWrapper: {
        display:"flex",
        minHeight: "100%",
        width:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    grid: {
        marginTop:"8vh",
        display: "grid",
        minHeight: "100%",
        gridTemplateColumns: "10vw 15vw 15vw 15vw 15vw 10vh",
        gridTemplateRows: "220px 220px 220px 220px 220px 220px",
        gridGap: "4rem",
    },
    container: {
        color: "white",
        fontSize:"100px",
        gridColumn: "3 / span 2",
        backgroundColor:"rgba(255,255,255, 0.5)",
        padding: "30px",
    },
}