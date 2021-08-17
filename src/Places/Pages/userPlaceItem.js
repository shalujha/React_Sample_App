import React,{useContext} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "C:\\Users\\Ayush Jha\\Documents\\Web_Developement_Projects\\full_stack_web_App\\modified\\src\\Shared\\components\\Verticalmodal.js";
import MyDeleteVerticallyCenteredModal from "./DeleteWarning";
import { AuthContext } from "../../context/auth-context";
function UserplaceItem(props){
    const [modalShow, setModalShow] = React.useState(false);
    const [DeletemodalShow, setDeleteModalShow] = React.useState(false);
    const auth=useContext(AuthContext);
    console.log(props.image);
return <Card style={{ width: '35rem', marginLeft:"auto",marginRight:"auto",marginBottom:"2.5rem",marginTop:"1rem"}}>
<Card.Img  src={props.image} />
<Card.Body style={{textAlign:"center"}}>
  <Card.Title>{props.title}</Card.Title>
  <h6>{props.address}</h6>
  <p>{props.description}</p>
  <hr></hr>
  <div style={{display:"flex",justifyContent:auth.isLoggedin?"space-between":"center"}}>
  <Button variant="outline-danger" className="mx-2" onClick={() => setModalShow(true)}>VIEW ON MAP</Button>
  {auth.isLoggedin && <Button variant="danger"className="mx-2">EDIT</Button>}
  {auth.isLoggedin && <Button variant="danger"className="mx-2" onClick={() => setDeleteModalShow(true)}>DELETE</Button>}
  </div>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        center={props.location}
        address={props.address}
      />
  <MyDeleteVerticallyCenteredModal
        show={DeletemodalShow}
        onHide={() => setDeleteModalShow(false)}
      />
</Card.Body>
</Card>
}

export default UserplaceItem;