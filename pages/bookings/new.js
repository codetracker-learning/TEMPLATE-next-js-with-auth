import {
  Container, Row, Image, Col,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WithHeaderStyledExample() {
  return (
    <Card className="mt-5">
      <Card.Header as="h5" style={{ background: '#7aeb87' }}>Scheduled Lesson</Card.Header>
      <Card.Body>
        <div>
          <Container>
            <Row>
              <Col>
                <Image src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.webp?b=1&s=170667a&w=0&k=20&c=uvclBOQrU3gd4_FMwzmTNK1PY4ydO_SlEgELJYj5mVI=" alt="tutor image" thumbnail />
              </Col>
              <Col>
                <h3>Mon, Jun 6 at 5:00pm EST</h3>
                <p>You have an upcoming session with Kosi. Please note that Kosi requires 8hrs notice to cancel at no charge.</p>
                <h5>$30 for one hour.</h5>
                <Button variant="info" className="m-2" style={{ color: 'white' }}>Edit Booking</Button>
                <Button variant="secondary">Cancel Booking</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;
