import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import { compose, withProps } from "recompose"



let rand =  (-0.001) + (Math.random() * (0.040-(-0.001)));
let rand2 =  (-0.001) + (Math.random() * (0.060-(-0.001)));
const MyMapComponent = compose(
    
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `900px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
      
    }),
    withScriptjs,
    withGoogleMap
    
  )((props) =>
    <GoogleMap
    
      defaultZoom={14}
      defaultCenter={{ lat: (35.550 + rand), lng: (45.4100 + rand2)}}
      //35.56583272182468, 45.41590771377791
    >
       
      {props.isMarkerShown && <Marker position={{ lat: (35.550 + rand), lng: (45.4100 + rand2) }} />}
      {console.log(rand)}
    </GoogleMap>
  )

export default MyMapComponent;
// Map with a Marker

