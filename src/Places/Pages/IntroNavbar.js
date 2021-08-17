import React,{useContext} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { AuthContext } from "../../context/auth-context";
import Sidebar from "../../Shared/components/sidebar";
import { useMediaQuery } from 'react-responsive'


function IntroNavbar(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const auth=useContext(AuthContext);
    if(isDesktopOrLaptop){
        return  <Navbar bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Brand  href="#home">YOUR PLACES</Navbar.Brand>
        <Nav >
          <Nav.Link href="/">ALL USERS</Nav.Link>
        {auth.isLoggedin && <Nav.Link href="/places/u1">MY PLACES</Nav.Link>}
        {auth.isLoggedin &&  <Nav.Link href="/places/new">ADD PLACE</Nav.Link>}
        {!auth.isLoggedin &&  <Nav.Link href="/auth">AUTHENTICATE</Nav.Link>}
        {auth.isLoggedin &&  <Nav.Link onClick={auth.logout} href="/">LOGOUT</Nav.Link>}
        </Nav>
        </Container>
      </Navbar>
    
    }else{
      return <Sidebar/>
    }
          
}

export default IntroNavbar;