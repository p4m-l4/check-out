import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Card = () => {
    return ( 
        <>
            <div>
            
            <Form style={{margin: 150, marginTop: 50,  marginBottom: 100, width: 600, marginLeft: 650}}>
            <h3 style={{textAlign: 'center',  marginBottom: 80}}>Card</h3>
            <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Enter amount" />
                        
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                    <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter card number" />
                        
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="number" placeholder="Enter expiry date" />
                        
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="number" placeholder="Enter CVV" />
                        
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" />
                        
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Country/ Region</Form.Label>
                        <Form.Control type="text" placeholder="Enter Country / Region" />
                        
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>State/ Province</Form.Label>
                        <Form.Control type="text" placeholder="Enter State / Province" />
                        
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter City" />
                        
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ZIP/ Postal Code</Form.Label>
                        <Form.Control type="number" placeholder="Enter ZIP / Postal Code" />
                        
                    </Form.Group>
                </Col>
                

            </Row>
            
            <Button style={{marginTop: 30}} variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        </>
     );
}
 
export default Card;