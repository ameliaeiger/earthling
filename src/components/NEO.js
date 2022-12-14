import React, { useEffect, useState } from "react"
import { TwitterShareButton} from "react-twitter-embed"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import "./NEO.css"


const NEO = ({ data, date, startDate}) => {
    let numHazardous

    const getData = (data) => {
        // console.log(data.near_earth_objects[startDate])
        let result = []
        data.near_earth_objects[startDate].forEach(data => {
        result.push(data.is_potentially_hazardous_asteroid)
        })
        let count = result.filter(boolean => boolean)
        numHazardous = count.length
    }
    
        // WORKING
        let displayText
        if (!data || (!typeof(displayText)==="number")){
        // console.log("loading")
        } else {
        displayText = data.near_earth_objects[startDate].length
        // console.log(displayText)
        getData(data)
        }

    return (
        <div className="neoDisplayText">
            <p style={styles.topText}>
                HELLO, EARTHLINGS! TODAY IS {date}.
            </p>
            <p>{`So far this week, Earth has encountered ${data.element_count} near-Earth objects (NEOs).`}</p>
            <p>{`So far today, you have encountered ${displayText} near earth objects, and avoided ${numHazardous} potentially hazardous situations.`}</p>
            <p style={styles.boldText}>
                Brag about it!
            </p>
            {displayText ? <TwitterShareButton
            url={'https://www.jpl.nasa.gov/missions/near-earth-object-surveyor'}
            options={{ text: "Hooray! I survived " + displayText + "/" + displayText + " threats to humanity today!"}}
            /> : "loading"}
        </div>
    )
}


export default NEO

const styles = {
    topText: {
      fontWeight:"bold",
      fontSize:"20px",
      margin:"10px"
    },
    boldText: {
      fontWeight:"bold",
      margin:"10px"
    }
}


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function MakeChart() {
  return <Doughnut data={data} />;
}