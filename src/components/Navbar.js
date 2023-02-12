import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

const Navbar1 = () => {
    return ( 
        <div>
            <Navbar  expand="lg" style={{backgroundColor: 'rgb(159, 44, 163)'}}>
      <Container>
        <Navbar.Brand href="/" style={{color: 'white'}}>DusuPay</Navbar.Brand>
        
      </Container>
    </Navbar>
        </div>
     );
}
 
export default Navbar1;