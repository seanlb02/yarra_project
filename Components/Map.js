import Head from 'next/head'
import Image from 'next/image'


import { useContext } from "react";
import { Router, useRouter } from "next/router";



import React, { useState, useEffect, useRef } from 'react';


import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import 'mapbox-gl/dist/mapbox-gl.css';

// import Map from 'react-map-gl';

import MapboxMap from './mapbox'



const testResource = {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [151.17835, -33.91318]
    },
    properties: {
        username: "user1",
        is_ent: false,
        text: "This is the first note ever to be writen on this app",
        category: "nothing",
        timestamp: Date.now(),
        likes: [{username: "Jane"}, {username: "John"}]
    }

}





export default function Map() {

    const router = useRouter()

    const [menuOpen, setMenuOpen] = useState(false)

    const [filter, setFilter] = useState("Rock")
    const [eventsArray, setEventsArray] = useState([])

    const [Position, setPosition] = useState(null)
    const [zoomDisable, setZoomDisable] = useState(true)

  

    const geolocationAPI = navigator.geolocation;
    const [long, setLong] = useState("");
    const [noGPS, setNoGPS] = useState(false);
    
    // var map = new mapboxgl.Map({
    //   container: 'map1',
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   center: [long, lat],
    //   zoom: 10
    // });

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(144.96332000);
    const [lat, setLat] = useState(-37.81400000);
    const [zoom, setZoom] = useState(18);



return (

    <div className={styles.pageContainer}>
        <MapboxMap/>
    </div>
) 
}
const styles = {
    filterReel: " font-text gap-2 no-scrollbar absolute bg-transparent bottom-4 left-0 right-0 z-50 overflow-x-scroll items-center px-2",
    filterReel2: " font-text flex gap-2 no-scrollbar absolute bg-transparent bottom-4 left-0 right-0 z-48 overflow-x-scroll items-center px-2",
    menu: "cursor-pointer text-md w-fit rounded-full bg-white px-2 py-2 border-1 shadow-md my-2 border-black",
    logo: "border-2 border-slate-600 flex items-center align-center gap-3 cursor-pointer text-md w-fit rounded-full bg-white px-4 py-1 border-1 shadow-md my-2 border-black",
    mainLogo: "bg-transparent absolute top-5 right-10 md:right-16 z-50 h-contain w-contain",
    pageContainer: "border border-black relative h-[75vh] w-[80vw]",
    popupTitle: "text-xl",
    button: "rounded-full bg-black text-white p-2 px-5 items-center align-center text-center pb-2",
    popupLink: "text-md pt-5",
    myLocation: "rounded-full p-1 absolute z-50 bottom-7 right-8 md:right-20 bg-white cursor-pointer",
}
