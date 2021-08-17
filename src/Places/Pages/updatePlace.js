import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./newPlace.css";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormItem  from "./Formitem";
import { useParams } from "react-router-dom";
const Dummy=[
    {
        id:"u1",
        title:"Taj Mahal",
        address:"Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
        location:{
            lat:"27.1751448",
            long:"78.0399535"
        },
        description:"one of the seven wonders of world",
        image:"https://lh5.googleusercontent.com/p/AF1QipP-07PpGefgkPNs6hPnPUft0yRCTbmFjkd_J7cy=w408-h265-k-no",
        creator:"u1"
    },
    {
        id:"u2",
        title:"Taj Mahal",
        address:"Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
        location:{
            lat:"27.1751448",
            long:"78.0399535"
        },
        description:"one of the seven wonders of world",
        image:"https://lh5.googleusercontent.com/p/AF1QipP-07PpGefgkPNs6hPnPUft0yRCTbmFjkd_J7cy=w408-h265-k-no",
        creator:"u2"
    }
];

console.log("Dumy is : ");
console.log(Dummy);
function create_form(data){
    return <FormItem name="update" title={data.title} description={data.description}></FormItem>
}

function UpdatePlace() {
    var placeid=useParams().placeId;
    console.log("id is : "+ placeid);
    var loaded_places=Dummy.filter(function(place){
        return place.id==placeid;
    })
    console.log(loaded_places);
    return loaded_places.map(create_form);
  }
export default UpdatePlace;
