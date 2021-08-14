import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./newPlace.css";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";
function Place() {
  const [isActivated,setisActivated]=useState(false);
  const [isValid, setisValid] = useState(false);
  const [title, setTitle] = useState("");
  const [Address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    title: "please enter a valid title",
    description: "description should be atleast 5 letters long",
    address: "please enter valid address",
  });

  function handleTitleChange(event) {
    setisActivated(true);
    const { name, value} = event.target;
    setTitle(value.trim());
    if ((title.length > 0 && description.length >=5) || Address.length>0) {
      setisValid(true);
    } else {
      setisValid(false);
    }
  }

  function handleDescriptionChange(event) {
   // setDescription(true);
    const { name, value } = event.target;
    setDescription(value.trim());
    if ((title.length > 0 && description.length >=5) || Address.length>0) {
      setisValid(true);
    } else {
      setisValid(false);
    }
  }
  function handleAddressChange(event) {
    setisActivated(true);
    const{name,value}=event.target;
    setAddress(value.trim());
    if ((title.length > 0 && description.length>=5) || Address.length>0) {
      setisValid(true);
    } else {
      setisValid(false);
    }
  }
  console.log("title length : "+title.length);
    console.log("description length : "+ description.length);
    console.log("address length : "+ Address.length);
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <Form
        style={{
          border: "1px solid black",
          borderRadius: "12px",
          backgroundColor: "white",
          alignItems: "flex-start",
        }}
        className="w-50 py-4 d-inline-flex flex-column  form-outline"
      >
        <Form.Group
          className="mb-3 w-100 px-4 form-outline"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="float-left">
            <b>Title</b>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            required
            onChange={handleTitleChange}
            name="title"
            value={title}
          />
          {isActivated && title.length==0 && (
            <span className="invalid-feedback d-block">{error.title}</span>
          )}
        </Form.Group>
        <Form.Group
          className="mb-3 w-100 px-4 form-outline"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="float-left">
            <b>Description</b>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            required
            onChange={handleDescriptionChange}
            name="description"
            value={description}
          />
          {isActivated && description.length<5 && (
            <span className="invalid-feedback d-block">{error.description}</span>
          )}
        </Form.Group>
        <Form.Group
          className="mb-3 w-100 px-4 form-outline"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="float-left">
            <b>Address</b>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            required
            onChange={handleAddressChange}
            name="Address"
            value={Address}
          />
          {isActivated && Address.length ==0 && (
            <span className="invalid-feedback d-block">{error.address}</span>
          )}
        </Form.Group>
        <div className="px-4" style={{ float: "left" }}>
          <Button variant="danger" type="submit" disabled={!(Address.length>=1 || (title.length>0 && description.length>4))}>
            ADD PLACE
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default Place;
