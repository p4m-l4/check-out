import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

const Cards = () => {
    return ( 
        <>
        <div  style={{margin: 100}}>
            <Row style={{backgroundColor: 'white', width: 1300, marginLeft: 250}}>
                <Col>
                    <Card style={{ width: '18rem' , width: 300, height: 300, backgroundColor: 'white'}}>
                        <Card.Body>
                            <h3 style={{textAlign: 'center', marginTop: 100}}>Mobile Money</h3>
                            
                            <Button href= '/mobilemoney' style={{marginLeft: 100, marginTop: 20}} variant="primary" >Pay by</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' , width: 300, height: 300}}>
                        <Card.Body>
                        <h3 style={{textAlign: 'center', marginTop: 100}}>Bank</h3>
                            
                        <Button href='/bank' style={{marginLeft: 100, marginTop: 20}} variant="primary">Pay by</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' , width: 300, height: 300}}>
                        <Card.Body>
                        <h3 style={{textAlign: 'center', marginTop: 100}}>Card</h3>
                            
                        <Button href='/card' style={{marginLeft: 100, marginTop: 20}} variant="primary">Pay by</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        </>
  );
}
 
export default Cards;