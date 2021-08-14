import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "C:\\Users\\Ayush Jha\\Documents\\Web_Developement_Projects\\full_stack_web_App\\modified\\src\\Shared\\components\\Verticalmodal.js";
function UserplaceItem(props){
    const [modalShow, setModalShow] = React.useState(false);
    console.log(props.image);
return <Card style={{ width: '35rem', marginLeft:"auto",marginRight:"auto",marginBottom:"2.5rem",marginTop:"1rem"}}>
<Card.Img  src={props.image} />
<Card.Body style={{textAlign:"center"}}>
  <Card.Title>{props.title}</Card.Title>
  <h6>{props.address}</h6>
  <p>{props.description}</p>
  <hr></hr>
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <Button variant="outline-danger" className="mx-2" onClick={() => setModalShow(true)}>VIEW ON MAP</Button>
  <Button variant="danger"className="mx-2">EDIT</Button>
  <Button variant="danger"className="mx-2">DELETE</Button>
  </div>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        center={props.location}
        address={props.address}
      />
</Card.Body>
</Card>
}

export default UserplaceItem;