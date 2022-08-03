import './App.css'
import React, { useEffect, useState } from "react"
import dayjs from 'dayjs'
// import data from "./data.js"
import quotes from "./quotes"

const App = () => {
  console.log(quotes)
  const date = dayjs().format("YYYY-MM-DD")
  const [userFormattedDate, setUserFormattedDate] = useState(dayjs(date).format("MM/DD/YYYY"))
  const [startDate, setStartDate] = useState(date)
  const [endDate, setEndDate] = useState(dayjs(date).subtract(6, "day").format("YYYY-MM-DD"))

// NASA DATA & OBJECT KEYS
  const [NASAData, setNASAData] = useState("")
  const [dateKeys, setDateKeys] = useState("")
  console.log(NASAData)

  // NOT RUNNING
  const [potentialHazardCount, setPotentialHazardCount] = useState("")
  const [nEOToday, setNEOToday] = useState("")


  useEffect(() => {
    const fetchNASAData = () => {
      fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w`)
        .then(response => response.json())
        .then(data => {
          setNASAData(data)
          setDateKeys(Object.keys(data.near_earth_objects))

          console.log(data)
          console.log(dateKeys)
          return
        })
    }
    fetchNASAData()
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


// WORKING
let displayText = "howdy"
if (!NASAData){
  console.log("loading")
} else {
  displayText = NASAData.near_earth_objects[startDate].length
  console.log("keys retrieved")
}

    return (
      <div>
        HELLO, EARTHLINGS! TODAY IS {userFormattedDate}. So far this week, Earth has encountered {NASAData.element_count} near-Earth objects (NEOs). So far today, you have avoided {displayText} near earth objects!
      
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


  // I want to access NASA data's near earth objects object.
  // I want to iterate through the past week's arrays (7) of near earth objects.
  // From there, I will 
  // For each occurrence of a near earth space object, I will access the object's "is_potentially_hazardous_asteroid" data.
  // 
