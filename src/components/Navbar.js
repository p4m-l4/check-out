import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar1 = () => {
    return ( 
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">DusuPay</Navbar.Brand>
        
      </Container>
    </Navbar>
        </div>
     );
}
 
export default Navbar1;