import React, {useEffect, useState} from "react"
import "./POD.css"

const POD = ({ apodData }) => {
    const [podData, setPodData] = useState("")
    const [podURL, setPODURL] = useState("")

    const getImage = () => {
        if (!podData){
        console.log("loading pod data")
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
            <p style={styles.podTitle}>{podData.title}</p>
            <p style={styles.podExplanation}>{podData.explanation}</p>
        </div>
    )
}

export default POD

const styles = {
    podContainer: {
        height:"100%",
        width:"100%",
        fontFamily: "cafe",
        display: "flex",
        borderRadius: "30px",
        alignItems:"center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        gridColumn: "2 / span 4",
        gridRow: "3 / span 2",
    },
    podExplanation: {
        display: "flex",
        padding:"15px",
        overflow:"auto",
        margin:"0px",
        maxHeight:"100px",
        maxWidth:"90%"
    },
    podTitle: {
        display:"flex",
        margin:"5px 0px 0px 0px",
        padding:"5px",
        fontSize:"30px",
        fontWeight:"bold"
    }
}