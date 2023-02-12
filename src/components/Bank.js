import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Bank = () => {
    return ( 
        <>
            <div>
            
            <Form style={{margin: 150, marginTop: 50,  marginBottom: 100, width: 400,  borderRadius: 15, borderColor: 'lightgrey', borderWidth: 1, marginLeft: 750}}>
            <h3 style={{textAlign: 'center',  marginBottom: 50}}>Bank</h3>
            <div style={{borderRadius: 15, borderColor: 'lightgrey', borderWidth: 1, borderStyle: 'ridge', padding: 50}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter amount" />
                <Form.Text className="text-muted">
                Please enter an amount more than 500.
                </Form.Text>
            </Form.Group>
            
            <Form.Group>
            <Form.Label>Bank</Form.Label>
            <Form.Select aria-label="Default non-select example">
                <option></option>
                <option value="1">Bank 1</option>
                <option value="2">Bank 2</option>
            </Form.Select>
            </Form.Group>
            
            <Button style={{marginTop: 30}} variant="primary" type="submit">
                Submit
            </Button>
            </div>
            </Form>
        </div>
        </>
     );
}
 
export default Bank;