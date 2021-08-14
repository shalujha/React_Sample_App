import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { Icon } from "leaflet"
function GMap(props){
  var position=props.center;
  return <MapContainer style={{width:"fitContent",height:"70vh"}} center={[position.lat, position.long]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[position.lat, position.long]} icon={new Icon({iconUrl: 'https://th.bing.com/th/id/OIP.PP9HnOJvMA803ipzQeaoywHaHa?w=217&h=217&c=7&o=5&dpr=1.25&pid=1.7', iconSize: [25, 41], iconAnchor: [12, 41]})} >
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
}

export default GMap;