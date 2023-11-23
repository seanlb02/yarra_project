import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 

import Image from "next/image";


import { useContext, useRef, useEffect, useState } from "react";
import { Router, useRouter } from "next/router";





// import the mapbox-gl styles so that the map is displayed correctly

function MapboxMap() {
    // this is where the map instance will be stored after initialization
  const [map, setMap] = React.useState();

    // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default
    const mapNode = useRef(null);
    const mapp = useRef(null);
    const [lng, setLng] = useState(144.96332000);
    const [lat, setLat] = useState(-37.81400000);
    const [zoom, setZoom] = useState(16);

    const [noGPS, setNoGPS] = useState(false);
    const geolocationAPI = navigator.geolocation;

    const [loaded, setLoaded] = useState(true)
    const [markerData, setMarkerData] = useState([])

   

  useEffect(() => {


    const node = mapNode.current;
   
    if (loaded) {
      mapp.current = new mapboxgl.Map({
        container: node,
              accessToken: 'pk.eyJ1Ijoic2VhbjEyMzQ1Njc4OSIsImEiOiJjbHBhcTdtdjIwODRxMmxvd3JxdHE1Zms4In0.6PQO6PDIdekSvP3RX41Yhg',
              style:'mapbox://styles/mapbox/standard-beta',
        center: [lng, lat],
        zoom: zoom,
        pitch: 70,
        attributionControl: false,
    
       
      });
      mapp.current.addControl(new mapboxgl.NavigationControl())
          // save the map object to React.useState
      setMap(mapp.current);

      }
    },[])
  


  const reCenter = function() {
    console.log("flying")
    mapp.current.flyTo({
      center: [lng, lat],
      zoom: zoom,
      pitch: -90,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });
    }

return (
<>
   <div ref={mapNode} style={{position: "absolute", width: "100%", height: "100%" }}/>
                
   
                </>
    )

}
export default MapboxMap