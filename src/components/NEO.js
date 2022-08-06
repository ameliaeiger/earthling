import React, { useEffect, useState } from "react"
import dayjs from "dayjs"

let numHazardous
const NEO = ({ date, data, startDate, apodData }) => {
  // NOT RUNNING
//   const [numHazardous, setNumHazardous] = useState("")
  const [nEOToday, setNEOToday] = useState("")


const getData = (data) => {
    console.log(data.near_earth_objects[startDate])
    let result = []
    data.near_earth_objects[startDate].forEach(data => {
      result.push(data.is_potentially_hazardous_asteroid)
    })
    let count = result.filter(boolean => boolean)
    console.log(result)
    console.log(count.length)
    numHazardous = count.length
  }
  
      // WORKING
let displayText = "howdy"
if (!data){
  console.log("loading")
} else {
  displayText = data.near_earth_objects[startDate].length
  getData(data)


}
  


    return (
        <div>
        `HELLO, EARTHLINGS! TODAY IS {date}. 
        So far this week, Earth has encountered {data.element_count} 
        near-Earth objects (NEOs). So far today, you have encountered {displayText} near earth objects, and avoided 
        {numHazardous} potentially hazardous situations.`        
        </div>


        
    )
}


export default NEO