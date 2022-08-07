import React, { useEffect, useState } from "react"

const Alert = ({ neoData, startDate }) => {
    const [data, setData] = useState("")
    const [potHaz, setPotHaz] = useState("")
    const [display, setDisplay] = useState("retrieving data")

    const getNum = (objArray) => {
        let result = []
        objArray.forEach(neo => {
        result.push(neo.is_potentially_hazardous_asteroid)
        })
        let count = result.filter(boolean => boolean)
        setPotHaz(count.length)
        setDisplay(`ALERT! ${potHaz} POTENTIALLY HAZADOUS NEO IN YOUR ATMOSPHERE TODAY!`)
    }

    useEffect(() => {
        if (!data && neoData) {
            setData(neoData)
        }
        if (!potHaz && data){
            getNum(data[startDate])
        }
        else {
            console.log("ALERT")
        }
    })

    return (
        <div style={styles.neoText}>
            {display}
        </div>
    )
}

export default Alert

const styles = {
    neoText: {
        height:"100%",
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        gridColumn:"1 / span 4"
    },
}