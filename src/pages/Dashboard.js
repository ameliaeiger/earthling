import React, { useState, useEffect } from "react"

//LIBRARIES
import dayjs from 'dayjs'

//COMPONENTS
import Header from "../components/Header"
import NEO from "../components/NEO"
import POD from "../components/POD"
import Alert from "../components/Alert"
import Search from "../components/Search"

const DashboardPage = ({date, startDate, data, apodData}) => {


    return (
        <>
            <Header />
            <div className="dashboard" style={styles.pageWrapper}>
                <div style={styles.grid}>
                    <Alert neoData={data.near_earth_objects} startDate={startDate} />
                    <Search />
                    <NEO data={data} date={date} startDate={startDate} />
                    <POD apodData={apodData} />      
                </div>
            </div>
        </>
    )
  }

  export default DashboardPage

  const styles = {
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
        maxHeight: "100vh",
        gridTemplateColumns: "10vw 15vw 15vw 15vw 15vw 10vh",
        gridTemplateRows: "200px 200px 200px 200px",
        gridGap: "3rem",
    },
    container: {
        color: "white",
        fontSize:"100px",
        gridColumn: "3 / span 2",
        backgroundColor:"rgba(255,255,255, 0.5)",
        padding: "30px",
    },
}