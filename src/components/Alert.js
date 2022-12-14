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
        setDisplay(generateDisplayText(potHaz))
    }

    const generateDisplayText = (num) => {
        return (
            <div style={styles.alertText}>
                <p style={{fontWeight:"bold", margin:"10px"}}>{"ALERT! YOU ARE ABSOLUTELY FINE!"}</p>
                <p style={{fontSize:"20px"}}>{`THERE ARE ${num} POTENTIALLY HAZARDOUS NEOs IN YOUR ATMOSPHERE TODAY`}</p>
            </div>
        )
    }

    useEffect(() => {
        if (!data && neoData) {
            setData(neoData)
        }
        if (!potHaz && data){
            getNum(data[startDate])
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
        backgroundColor: "rgba(255, 255, 255, .9)",
        boxShadow: "0px 0px 20px white, 0px 0px 50px white",   
        gridColumn:"2 / span 4",
        textAlign:"center"
    },
    alertText: {
        display:"flex",
        flexDirection:"column"
    },
}