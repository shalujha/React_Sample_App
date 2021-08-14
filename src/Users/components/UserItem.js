import React from "react";
import {Link} from "react-router-dom";
function UserItem(props){
    return <div className="userItemCard">
        <Link to={'/'+props.id+'/places'}>
        <div style={{display:"flex"}}>
        <img src={props.image}  className="circle" style={{maxWidth:"6rem",maxHeight:"6rem",marginRight:"2rem"}}/>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <h2 className="userItemContent">{props.name}</h2>
        <h3 className="userItemContent">{props.placeCount}{props.placeCount==1?" place":" places"}</h3>
        </div>
        </div>
        </Link>
    </div>

}

export default UserItem;