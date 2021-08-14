import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserplaceItem from "./userPlaceItem";
function createItem(item){
    return <UserplaceItem title={item.title} 
    key={item.id}
    description={item.description}
    image={item.image}
    address={item.address}
    location={item.location}
    creator={item.creator}>
    </UserplaceItem>
}
function placeList(props){
if(props.items.length==0){
return (<Card style={{ width: '18rem',textAlign:"center",marginLeft:"auto",marginRight:"auto",marginTop:"20rem",marginBottom:"auto" }}>
<Card.Body>
  <Card.Title>No Place to share</Card.Title>
  <Button variant="primary">Share places?</Button>
</Card.Body>
</Card>)
}else{
 return props.items.map(createItem); 
}
}
export default placeList;