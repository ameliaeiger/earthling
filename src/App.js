import './App.css'
import React, { useEffect, useState } from "react"
import dayjs from 'dayjs'
// import data from "./data.js"
// import quotes from "./quotes"
import NEO from "./components/NEO"
import POD from "./components/POD"
import { fetchNASAData, fetchAPOD } from "./apiCalls"

const App = () => {
  const date = dayjs().format("YYYY-MM-DD")
  const [loading, setLoading] = useState(true)
  const [userFormattedDate, setUserFormattedDate] = useState(dayjs(date).format("MM/DD/YYYY"))
  const [startDate, setStartDate] = useState(date)
  const [endDate, setEndDate] = useState(dayjs(date).subtract(6, "day").format("YYYY-MM-DD"))

// NASA DATA & OBJECT KEYS
  const [apodData, setApodData] = useState("")
  const [NASAData, setNASAData] = useState("")
  const [dateKeys, setDateKeys] = useState("")
  console.log(NASAData)

  useEffect(() => {
    fetchNASAData(startDate, endDate).then(data => {
      setNASAData(data)
      setDateKeys(Object.keys(data.near_earth_objects))
    })
    fetchAPOD().then(data => {
      console.log(data)
      setApodData(data)
      console.log(apodData)
      setLoading(false)
    })
  },[])




  // const countHazards = () => {
  //   dateKeys.forEach(date => {
  //     console.log(date)
  //     console.log(NASAData.near_earth_objects[date])
  //     console.log(NASAData.near_earth_objects[date].is_potentially_hazardous_asteroid)
  //     let result = NASAData.near_earth_objects[date].is_potentially_hazardous_asteroid
  //     console.log(result)
  //   })
  // }


    return (
      <div>
        <NEO data={NASAData} date={userFormattedDate} startDate={startDate} />
        <POD apodData={apodData} />      
      </div>
    )
}

export default App;






  //NASA
  // const nasaKey = CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w
  // const nasaURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`
  // {!NASAData.near_earth_objects[startDate].length ? "loading" : NASAData.near_earth_objects[startDate].length} 
  //TWITTER
  // const twitterKey = "hkFsJo3avUMCr2EgVlstYk8Ae"
  // const twitterSecretKey = "rKP63FL4ONxSgVpU1lC8kNYLrG6c9kCCOm6CUAiahGoljNq9n9"
  // const twitterBearerToken = "AAAAAAAAAAAAAAAAAAAAANUjfgEAAAAAYRYeLe%2FO%2BlGtihaAYT%2BhTapVbAU%3DmNKxQL15TRVtiuvOGqungPQfglPuOkdQYhOppHaLcG0FVZRBa6"
  // let text = `Today there are ${}`
