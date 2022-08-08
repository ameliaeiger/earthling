import React, { useState } from "react"
import "./NEO.css"
import { fetchNASAData } from "../apiCalls"
import { Button, getFormLabelUtilityClasses } from "@mui/material"
import "./Search.css"
import dayjs from "dayjs"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Search = () => {
    const [userInputDate, setUserInputDate] = useState("")
    const [isFetching, setIsFetching] = useState(false)
    const [hasSearched, setHasSearched] = useState(false)
    const [searchResultsTotal, setSearchResultsTotal] = useState("")
    const [searchResultsHaz, setSearchResultsHaz] = useState("")

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
    const UserDate = () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
          <DatePicker 
            selected={startDate} 
            onChange={date => {
                let formatted = dayjs(date).format("YYYY-MM-DD")
                setStartDate(date)
                setUserInputDate(formatted)
            }} />
        )
      }

    return (
        <div id="searchForm" className="searchForm" style={styles.searchForm}>
            <p style={styles.topText}>
                SEARCH NEOs:
            </p>
        <form style={styles.form}>
            {UserDate()}
        </form>
        {isFetching ? <p id="loadingText">loading...</p> : generateResults()}
            <Button
                id="searchButton"
                style={styles.button}
                variant="contained"
                    onClick={event => handleSubmit(event)}
                    >
                    Search
            </Button>
        </div>
    )
}


export default Search

const styles = {
    form: {
        display:"flex",
        fontSize:"18px",
        flexDirection:"column",
        justifyContent:"space-between",
        fontWeight:"bold"
    },
    button: {
        fontFamily:"cafe",
        position:"relative",
        width:"25%",
        backgroundColor:"#36d42e",
        borderRadius:"15px",
        // marginBottom:"5px"
    },
    topText: {
      fontWeight:"bold",
      fontSize:"20px",
      margin:"20px 20px 20px 20px",

    },
    resultsGrid: {
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        margin:"0px 0px",
        alignItems:"space-between",
        fontWeight:"bold"
    },
}