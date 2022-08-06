import React, { useEffect, useState } from "react"
import { TwitterTimelineEmbed, TwitterShareButton} from 'react-twitter-embed';

let numHazardous
const NEO = ({ data, date, startDate}) => {
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
        <>
        <div style={styles.neoText}>
            HELLO, EARTHLINGS! TODAY IS {date}. 
            So far this week, Earth has encountered {data.element_count} 
            near-Earth objects (NEOs). So far today, you have encountered {displayText} near earth objects, and avoided  
            {numHazardous} potentially hazardous situations.
            <TwitterShareButton
            url={'https://www.jpl.nasa.gov/missions/near-earth-object-surveyor'}
            options={{ text: "Hooray! I survived " + displayText + "/" + displayText + " threats to humanity today!"}}
        />
        </div>       
        </>
)
}


export default NEO

const styles = {
    neoText: {
        display: "flex",
        padding: "30px",
        borderRadius: "30px",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        gridColumn: "3 / span 2",
        gridRow: "1 / span 2",
    }
}