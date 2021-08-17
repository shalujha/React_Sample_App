import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./newPlace.css";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";

import MyDeleteVerticallyCenteredModal from "./DeleteWarning";




function FormItem(props) {
  const [isActivated,setisActivated]=useState(false);
  const [isValid, setisValid] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [Address, setAddress] = useState("");
  const [description, setDescription] = useState(props.description);
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

  function handleClick(event){
    event.preventDefault();
    //console.log(this.state.title);
    //console.log("button got clicked");
    console.log("title : "+ title);
     console.log("description : "+ description);
  }
  // console.log("title length : "+title.length);
  //   console.log("description length : "+ description.length);
  //   console.log("address length : "+ Address.length);
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
        <div className="px-4" style={{ float: "left" }}>
          <Button variant="danger" type="button" disabled={!(Address.length>=1 || (title.length>0 && description.length>4))} onClick={handleClick}>
            {props.name}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default FormItem;
