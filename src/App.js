import './App.css'
import React, { useEffect, useState } from "react"
import dayjs from 'dayjs'
import data from "./data.js"

const App = () => {
  console.log(data)
  const date = dayjs().format("YYYY-MM-DD")
  const [userFormattedDate, setUserFormattedDate] = useState(dayjs(date).format("MM/DD/YYYY"))
  const [startDate, setStartDate] = useState(date)
  const [endDate, setEndDate] = useState(dayjs(date).subtract(6, "day").format("YYYY-MM-DD"))

  const [NASAData, setNASAData] = useState(data)
  console.log(data)

  // NOT RUNNING
  // const [dateKeys, setDateKeys] = useState("")
  const [potentialHazardCount, setPotentialHazardCount] = useState("")
  const [nEOToday, setNEOToday] = useState("")


  // useEffect(() => {
  //   const fetchNASAData = () => {
  //     fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w`)
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data)
  //         setNASAData(data)
  //         return
  //       })
  //   }
  //   fetchNASAData()
  // },[])




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
let dateKeys
if (!NASAData){
  console.log("loading")
} else {
  dateKeys = Object.keys(NASAData.near_earth_objects)
  console.log(dateKeys)
  console.log("data retrieved")
}

    return (
      <div>
        HELLO, EARTHLINGS! TODAY IS {userFormattedDate}. So far this week, Earth has encountered {NASAData.element_count} near-Earth objects (NEOs). So far today, you have avoided {NASAData.near_earth_objects[startDate].length} near earth objects!
      
      </div>
    )
}

export default App;

  //NASA
  // const nasaKey = CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w
  // const nasaURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`

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
