import './App.css'
import React, { useEffect, useState } from "react"
// import data from "./data.js"
// import quotes from "./quotes"

//LIBRARIES
import Globe from './components/Globe'
import dayjs from 'dayjs'

//COMPONENTS
import NEO from "./components/NEO"
import POD from "./components/POD"
import Header from './components/Header'
import Footer from "./components/Footer"

//ASSETS
import image from "./assets/stars.jpg"

import { fetchNASAData, fetchAPOD } from "./apiCalls"

const App = () => {
  const date = dayjs().format("YYYY-MM-DD")
  const [dimensions, setDimensions] = useState(window.screen)
  const [loading, setLoading] = useState(true)

  //DATES / DAY.JS
  const [userFormattedDate, setUserFormattedDate] = useState(dayjs(date).format("MM/DD/YYYY"))
  const [startDate, setStartDate] = useState(date)
  const [endDate, setEndDate] = useState(dayjs(date).subtract(6, "day").format("YYYY-MM-DD"))

// NASA DATA & OBJECT KEYS
  const [apodData, setApodData] = useState("")
  const [NASAData, setNASAData] = useState("")
  const [dateKeys, setDateKeys] = useState("")
  // console.log(NASAData)

  // useEffect(() => {
  //   fetchNASAData(startDate, endDate).then(data => {
  //     setNASAData(data)
  //     setDateKeys(Object.keys(data.near_earth_objects))
  //   })
  //   fetchAPOD().then(data => {
  //     console.log(data)
  //     setApodData(data)
  //     console.log(apodData)
  //     setLoading(false)
  //   })
  // },[])

    return (
      <div style={{height:"100%ls
      ", width:dimensions.availWidth, backgroundImage:`url(${image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", alignItems:"space-between"}}>
        <Header />
        <Globe
          />
        <Footer />


        {/* <NEO data={NASAData} date={userFormattedDate} startDate={startDate} />
        <POD apodData={apodData} />       */}
      </div>
    )
}

export default App;

const styles = {
  background: {
    minHeight: "1500px",
    backgroundSize: "cover",
  }
}






  //NASA
  // const nasaKey = CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w
  // const nasaURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`
  // {!NASAData.near_earth_objects[startDate].length ? "loading" : NASAData.near_earth_objects[startDate].length} 
  //TWITTER
  // const twitterKey = "hkFsJo3avUMCr2EgVlstYk8Ae"
  // const twitterSecretKey = "rKP63FL4ONxSgVpU1lC8kNYLrG6c9kCCOm6CUAiahGoljNq9n9"
  // const twitterBearerToken = "AAAAAAAAAAAAAAAAAAAAANUjfgEAAAAAYRYeLe%2FO%2BlGtihaAYT%2BhTapVbAU%3DmNKxQL15TRVtiuvOGqungPQfglPuOkdQYhOppHaLcG0FVZRBa6"
  // let text = `Today there are ${}`
