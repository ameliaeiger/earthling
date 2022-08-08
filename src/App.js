import './App.css'
import React, { useEffect, useState } from "react"
import {
  Routes,
  Route,
  Link
} from "react-router-dom"
// import data from "./data.js"
// import quotes from "./quotes"

//LIBRARIES
import dayjs from 'dayjs'

//COMPONENTS
import NEO from "./components/NEO"
import POD from "./components/POD"
import Header from './components/Header'
import Footer from "./components/Footer"

//PAGES
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/Dashboard'

//ASSETS
import image from "./assets/stars.jpg"

//API CALLS
import { fetchNASAData, 
  // fetchAPOD
 } from "./apiCalls"



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

  useEffect(() => {
    fetchNASAData(startDate, endDate).then(data => {
      setNASAData(data)
      console.log("APP NASA DATA SET IN USE EFFECT", data)
      setDateKeys(Object.keys(data.near_earth_objects))
    })
    // fetchAPOD().then(data => {
    //   setApodData(data)
    // })
    setLoading(false)
    console.log("APP LOADING", loading)
  },[])



    return (
      <div className="App" style={{minHeight:"100vh", minWidth:"100%", backgroundImage:`url(${image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", alignItems:"space-between"}}>
        <Routes>
          <Route path="/" element={<LandingPage image={image}/>} />
          <Route exact path="/dashboard" element={
            <DashboardPage 
              dimensions={dimensions} 
              date={userFormattedDate}
              startDate={startDate}
              data={NASAData}
              apodData={apodData}/>
              } />
        </Routes>
      </div>
    )
}

export default App;

const styles = {
  background: {
    minHeight: "100vh",
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
