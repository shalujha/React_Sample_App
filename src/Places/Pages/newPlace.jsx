import React from "react";
import Form from 'react-bootstrap/Form'
import "./newPlace.css";
function Place(){
    return <div style={{textAlign:"center",marginTop:"5rem"}}>
        <Form style={{border:"1px solid black",borderRadius:"12px",backgroundColor:"white",alignItems:"flex-start"}}className="w-50 py-4 d-inline-flex flex-column align-items-center form-outline">
    <Form.Group className="mb-3 w-100 px-4 form-outline" controlId="exampleForm.ControlTextarea1">
      <Form.Label className="float-left"><b>Title</b></Form.Label>
      <Form.Control as="textarea" rows={1} required />
    </Form.Group>
  </Form>
  </div>
}
export default Place;