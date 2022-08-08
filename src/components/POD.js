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
        <section className="podContainer">
            <div className="podDescription">
                <img className="podImage" src={podURL}/>
                <p className="nasapod">NASA Image of the Day</p>
            </div>
            <div className="podDescription">
                <p className="podTitle">{podData.title}</p>
                <p className="podExplanation">{podData.explanation}</p>
            </div>
        </section>
    )
}

export default POD