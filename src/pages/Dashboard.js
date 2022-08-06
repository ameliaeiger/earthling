import React from "react"

//LIBRARIES
import dayjs from 'dayjs'

//COMPONENTS
import Header from "../components/Header"
import NEO from "../components/NEO"
import POD from "../components/POD"
import { withTheme } from "@emotion/react"

const DashboardPage = ({dimensions, date, startDate, data, apodData}) => {

    return (
        <>
            <Header />
            <div style={styles.pageWrapper}>
                <div style={styles.grid}>
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
        height: "100vh",
        width:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "20vw 20vw 20vw 20vw",
        gridTemplateRows: "20vh 20vh",
        gridGap: "1rem",
    },
    container: {
        color: "white",
        fontSize:"100px",
        gridColumn: "3 / span 2",
        backgroundColor:"rgba(255,255,255, 0.5)",
        padding: "30px",
    },
}