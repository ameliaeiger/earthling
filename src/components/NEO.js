import React, { useEffect, useState } from "react"
import dayjs from 'dayjs'
import quotes from "./quotes"


const NEO = ({ date, data, displayText }) => {
    return (
        `HELLO, EARTHLINGS! TODAY IS ${date}. So far this week, Earth has encountered ${data.element_count} near-Earth objects (NEOs). So far today, you have avoided ${displayText} near earth objects!`
    )
}


export default NEO