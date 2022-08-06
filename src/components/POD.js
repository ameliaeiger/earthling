import React, {useEffect, useState} from "react"
import "./POD.css"

const POD = ({ apodData }) => {
    const [podData, setPodData] = useState("")
    const [podURL, setPODURL] = useState("")

    const getImage = () => {
        if (!podData){
        console.log("loading")
        } else {
        return podData.url
        }
    }

    useEffect(()=> {
        setPodData(apodData)
        setPODURL(getImage())
    })


    return (
        <div style={styles.podContainer}>
            <img className="podImage" src={podURL}/>
        </div>
    )
}

export default POD

const styles = {
    podContainer: {
        display: "flex",
        padding: "30px",
        borderRadius: "30px",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        gridColumn: "1 / span 2",
        gridRow: "1 / span 2",
    }
}