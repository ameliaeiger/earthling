import React from "react"
import { useEffect, useState, useRef } from "react"
import Globe from "react-globe.gl"
import globeImage from "../assets/earth-large.jpg"

export default function CustomGlobe() {
    const globeEl = useRef()
    const [rotation, setRotation] = useState(true)

    useEffect(() => {
        globeEl.current.pointOfView({ altitude: 2 }, 5000)
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 2
    }, [rotation]);

  return (
    <section style={styles.globeWrapper}>
    <Globe
        ref={globeEl}
        globeImageUrl={globeImage}
        backgroundColor="rgba(0,0,0,0)"
        hexPolygonResolution={3} // no go above 3 or else u a clown
    />
    </section>
  )
}

const styles = {
    globeWrapper: {
        position:"fixed",
        top:30,
        height:"90%",
        width:"100%",
        justifyContents:"center",
        alignItems:"center",
    }
}