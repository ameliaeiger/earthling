import React from "react"

//LIBRARIES
import dayjs from 'dayjs'

//COMPONENTS
import Header from "../components/Header"
import NEO from "../components/NEO"

const DashboardPage = ({dimensions, date, startDate, data}) => {

    return (
        <>
            <Header />
            <div style={styles.pageWrapper}>
                <div style={styles.grid}>
                    <NEO data={data} date={date} startDate={startDate} />
                    {/* <POD apodData={apodData} />       */}
                </div>
            </div>
        </>
    )
  }

  export default DashboardPage

  const styles = {
    pageWrapper: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    grid: {
        display: "grid",
        justifyContent: "space-evenly",
        gridTemplateColumns: "20vw 20vw 20vw 20vw",
        gridGap: "1rem",
    },
}