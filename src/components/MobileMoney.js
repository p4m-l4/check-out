import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const MobileMoney = () => {
    return ( 
        <>
        <div>
            
            <Form style={{margin: 150, marginTop: 50,  marginBottom: 100, width: 350, marginLeft: 800}}>
            <h3 style={{textAlign: 'center',  marginBottom: 80}}>Mobile Money</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter amount" />
                <Form.Text className="text-muted">
                Please enter an amount more than 500.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" />
                
            </Form.Group>
            <Form.Group>
            <Form.Label>Service provider</Form.Label>
            <Form.Select aria-label="Default non-select example">
                <option></option>
                <option value="1">Mtn</option>
                <option value="2">Airtel</option>
            </Form.Select>
            </Form.Group>
            
            <Button style={{marginTop: 30}} variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        </>
     );
}
 
export default MobileMoney;