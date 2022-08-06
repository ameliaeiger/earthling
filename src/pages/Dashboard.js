import React from "react"

//COMPONENTS
import Header from "../components/Header"

const DashboardPage = ({image, dimensions}) => {
    return (
      <div style={{height:dimensions.availHeight, width:dimensions.availWidth, backgroundImage:`url(${image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", alignItems:"space-between"}}>
        <Header />
            {/* <NEO data={NASAData} date={userFormattedDate} startDate={startDate} />
      <POD apodData={apodData} />       */}
      </div>

    )
  }

  export default DashboardPage