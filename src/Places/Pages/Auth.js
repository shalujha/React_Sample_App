import React, { useState,useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom"; 
import { AuthContext } from "../../context/auth-context";
function Auth() {
  const a=useContext(AuthContext);
  const [Email, setEmail] = useState("");
  const [Password, setPassWord] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    if (name == "Email") {
      //  var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
      let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (re.test(value)) {
        // this is a valid email address
        // call setState({email: email}) to update the email
        // or update the data in redux store.
        setEmail(value);
      } else {
        // invalid email, maybe show an error to the user.
        setEmail("");
      }
    } else {
      setPassWord(value);
    }
  }
  function handleClick(event){
      console.log("button got clicked");
      console.log("Email : "+ Email);
      console.log("Password : "+ Password);
      a.login();
      console.log("status : "+ a.isLoggedin);
  }
  return (
    <div
      style={{
        marginTop: "5rem",
        textAlign: "center",
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>LOGIN REQUIRED</Card.Title>
          <hr></hr>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="Email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="Password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            
            <div>
         <Link to="/places/new" 
         disabled={Email.length == 0 || Password.length < 4} 
         onClick={handleClick}
         className="btn btn-primary mb-3">LOGIN</Link>
      </div>
            <div>
         <Link to="/register" className="btn btn-primary">SWITCH TO REGISTER</Link>
      </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Auth;
