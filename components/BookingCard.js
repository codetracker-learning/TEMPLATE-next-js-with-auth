import PropTypes from 'prop-types';
import {
  Container, Row, Image, Col,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteBooking, getAllBookings } from '../api/tutorbookingdata';

function BookingCard({ bookingObj, onUpdate }) {
  const deleteThisBooking = () => {
    if (window.confirm('Delete booking with $(bookingOjb.tutor_name)?')) {
      deleteBooking(bookingObj?.firebaseKey).then(() => onUpdate(getAllBookings));
    }
  };

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
                <h3>Date and Time</h3>
                <p>You have an upcoming session with {bookingObj?.tutor_name}. Please note that {bookingObj?.tutor_name} requires 8hrs notice to cancel at no charge.</p>
                <h5>${bookingObj?.rate} for one hour.</h5>
                <h5>{bookingObj?.subject}</h5>
                <Button variant="info" className="m-2" style={{ color: 'white' }}>Edit Booking</Button>
                <Button variant="secondary" onClick={deleteThisBooking}>Cancel Booking</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Card.Body>
    </Card>
  );
}

BookingCard.propTypes = {
  bookingObj: PropTypes.shape({
    tutor_name: PropTypes.string,
    rate: PropTypes.number,
    subject: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default BookingCard;
