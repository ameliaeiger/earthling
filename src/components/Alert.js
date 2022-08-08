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
        setDisplay(`ALERT!!! YOU ARE ABSOLUTELY FINE! THERE ARE ${potHaz} POTENTIALLY HAZARDOUS NEOs IN YOUR ATMOSPHERE TODAY!`)
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
        fontFamily:"cafe",
        height:"100%",
        width:"100%",
        fontWeight:"bold",
        fontSize:"40px",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.55)",
        gridColumn:"2 / span 4",
        textAlign:"center"
    },
}