import React, { useEffect, useState } from "react"
import "./NEO.css"
import { fetchNASAData } from "../apiCalls"
import { Button } from "@mui/material"
import "./Search.css"


const Search = () => {
    const [userInputDate, setUserInputDate] = useState("")
    const [isFetching, setIsFetching] = useState(false)
    const [hasSearched, setHasSearched] = useState(false)
    const [searchResultsTotal, setSearchResultsTotal] = useState("")
    const [searchResultsHaz, setSearchResultsHaz] = useState("")


    // const searchNASA = (date) => {
    //     fetchNASAData.then(data => {
    //         console.log(data)
    //     })
    // }

    // const getData = (data) => {
    //     let result = []
    //     data.near_earth_objects[startDate].forEach(data => {
    //     result.push(data.is_potentially_hazardous_asteroid)
    //     })
    //     let count = result.filter(boolean => boolean)
    //     numHazardous = count.length
    // }
    
        // WORKING
        // let displayText
        // if (!data || (!typeof(displayText)==="number")){
        // console.log("loading")
        // } else {
        // displayText = data.near_earth_objects[startDate].length
        // console.log(displayText)
        // getData(data)
        // }

        const handleSubmit = (e) => {
            e.preventDefault()
            setIsFetching(true)
            fetchNASAData(userInputDate).then(response => response.json()).then(data => {
                console.log(data)
                let resultNum = data.near_earth_objects[userInputDate].length
                let resultHaz = data.near_earth_objects[userInputDate].filter(object => object.is_potentially_hazardous_asteroid)
                console.log(resultHaz)

                setSearchResultsTotal(resultNum)
                setSearchResultsHaz(resultHaz.length)
                console.log("num", searchResultsTotal, "haz", searchResultsHaz)
                setHasSearched(true)
                setIsFetching(false)
            })
        }

        const generateResults = () => {
            if (!hasSearched) {
                return <p></p>
            }
            return (
                <div style={styles.resultsGrid}>
                    <p>Date: {userInputDate}</p>
                    <p>NEOs: {searchResultsTotal}</p>
                    <p># Potential Hazards: {searchResultsHaz}</p>
                </div>
            )
        } 

    return (
        <div id="searchForm" style={styles.searchForm}>
            <p style={styles.topText}>
                SEARCH NEOs:
            </p>
        <form style={styles.form}>
            <label>
                Date:
                <input id="search" type="date" name="userInputDate" value={userInputDate} onChange={event => setUserInputDate(event.target.value)}/>
            </label>
        </form>
        {isFetching ? <p id="loadingText">loading...</p> : generateResults()}
            <Button
                id="searchButton"
                variant="contained"
                style={styles.button}
                    onClick={event => handleSubmit(event)}
                    >
                    Search
            </Button>
        </div>
    )
}


export default Search

const styles = {
    searchForm: {
        fontFamily:"cafe",
        height:"100%",
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.55)",
        gridRow: "2 / span 2",
        gridColumn:"2 / span 1"
    },
    form: {
        display:"flex",
        fontSize:"18px",
        flexDirection:"column",
        justifyContent:"space-between",
        fontWeight:"bold"
    },
    topText: {
      fontWeight:"bold",
      fontSize:"20px",
      margin:"20px 20px 20px 20px",

    },
    button: {
        fontFamily:"cafe",
        width:"25%",
        backgroundColor:"green"
    },
    resultsGrid: {
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        margin:"50px 0px",
        alignItems:"space-between",
        fontWeight:"bold"
    },
}