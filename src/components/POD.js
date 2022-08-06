import React, {useEffect, useState} from "react"

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
        <div>
            <img src={podURL}/>
        </div>
    )
}

export default POD