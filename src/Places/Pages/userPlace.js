import React from "react";
import PlaceList  from "./placeList";
import {useParams} from "react-router-dom";
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

const UserPlace=function(){
    
    var id=useParams().userId;
    var loaded_places=Dummy.filter(function(place){
        return place.creator==id;
    })
    return <PlaceList items={loaded_places}></PlaceList>
}
export default UserPlace;