import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import React from 'react';

const Cards = () => {
    return ( 
        <>
        <div style={{backgroundColor: 'black'}}>
            <img src="/public/HomePic.png" alt="" />
            <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
        </div>
        <div  style={{margin: 100}}>
            <Row style={{backgroundColor: 'white', width: 1300, marginLeft: 250}}>
                <Col>
                    <Card className="shadow-4-strong" style={{ width: '18rem' , width: 300, height: 300, backgroundColor: 'white', borderRadius: 15, borderColor: 'lightgrey'}}>
                        <Card.Body>
                            <h3 style={{textAlign: 'center', marginTop: 100}}>Mobile Money</h3>
                            
                            <Button  href= '/mobilemoney' style={{marginLeft: 85, marginTop: 20, borderRadius: 30, width: 100, backgroundColor: 'rgb(245, 210, 69)', borderColor: 'rgb(245, 210, 69'}} variant="primary" >Pay by</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' , width: 300, height: 300, backgroundColor: 'white', borderRadius: 15, borderColor: 'lightgrey'}}>
                        <Card.Body>
                        <h3 style={{textAlign: 'center', marginTop: 100}}>Bank</h3>
                            
                        <Button href='/bank' style={{marginLeft: 85, marginTop: 20, borderRadius: 30, width: 100, backgroundColor: 'rgb(245, 210, 69)', borderColor: 'rgb(245, 210, 69'}} variant="primary">Pay by</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' , width: 300, height: 300, backgroundColor: 'white', borderRadius: 15, borderColor: 'lightgrey'}}>
                        <Card.Body>
                        <h3 style={{textAlign: 'center', marginTop: 100}}>Card</h3>
                            
                        <Button href='/card' style={{marginLeft: 85, marginTop: 20, borderRadius: 30, width: 100, backgroundColor: 'rgb(245, 210, 69)', borderColor: 'rgb(245, 210, 69'}} variant="primary">Pay by</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        </>
  );
}
 
export default Cards;