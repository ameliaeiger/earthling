import React from "react";
import { useEffect, useState, useRef, useCallback} from "react";
import Button from "@mui/material/Button"

import Globe from "react-globe.gl";
import globeImage from "../assets/earth-large.jpg"

export default function CustomGlobe() {
    const globeEl = useRef()
    const [rotation, setRotation] = useState(true);
    const [countries, setCountries] = useState({ features: [] });



    useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
        )
          .then((res) => res.json())
          .then((countries) => {
            setCountries(countries);
          });
      }, []);

    useEffect(() => {
        globeEl.current.pointOfView({ altitude: 3 }, 5000);


        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 2;
        
        // globeEl.current.controls().update();
      }, [rotation]);

  return (
    <section style={styles.globeWrapper}>
    <Globe
        ref={globeEl}
        globeImageUrl={globeImage}
        // rendererConfig={{}}
        backgroundColor="rgba(0,0,0,0)"
    //   labelsData={[selectedCountry]}
    //   labelText={"label"}
    //   labelSize={1.6}
    //   labelColor={useCallback(() => "white", [])}
    //   labelDotRadius={0.4}
    //   labelAltitude={0.05}
    //   hexPolygonsData={hex.features}
      hexPolygonResolution={3} //values higher than 3 makes it buggy
    //   hexPolygonMargin={0.62}
    //   hexPolygonColor={useCallback(() => "#1b66b1", [])}
    />
    </section>
  );
}

const styles = {
    globeWrapper: {
        height:"500px"
    }
}