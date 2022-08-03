import logo from './logo.svg'
import './App.css'
import React, { useEffect, setState, useState } from "react"
import dayjs from 'dayjs'

const App = () => {
  const date = dayjs().format("YYYY-MM-DD")
  const [userFormattedDate, setUserFormattedDate] = useState(dayjs(date).format("MM/DD/YYYY"))
  const [startDate, setStartDate] = useState(date)
  const [endDate, setEndDate] = useState(dayjs(date).subtract(6, "day").format("YYYY-MM-DD"))

  const [NASAData, setNASAData] = useState("")
  const [dateKeys, setDateKeys] = useState("")
  const [potentialHazardCount, setPotentialHazardCount] = useState("")
  const [nearEarthObjectsNum, setNearEarthObjectsNum] = useState("")

  // const dateKeys = Object.keys(NASAData.near_earth_objects)

  useEffect(() => {
    const fetchNASAData = () => {
      fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w`)
        .then(response => response.json())
        .then(data => {
          setNASAData(data)
          console.log(NASAData)
          return
        })
    }
    fetchNASAData()
    // setNearEarthObjectsNum(NASAData.near_earth_objects[startDate].length)

  },[])



  // setDateKeys(Object.keys(NASAData.near_earth_objects))
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

    return (
      <div>
        HELLO, EARTHLINGS! TODAY IS {userFormattedDate}. So far today, you have avoided {nearEarthObjectsNum} near earth objects!
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