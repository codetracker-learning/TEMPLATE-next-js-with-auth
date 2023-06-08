import PropTypes from 'prop-types';
import {
  Container, Row, Image, Col,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { deleteBooking } from '../api/tutorbookingdata';
import { getSingleTutor } from '../api/tutorData';

function BookingCard({ bookingObj, onUpdate }) {
  const [tutor, setTutor] = useState(null);
  useEffect(() => {
    getSingleTutor(bookingObj.tutorKey).then(setTutor);
  }, [bookingObj.tutorKey, setTutor]);
  const deleteThisBooking = () => {
    if (window.confirm('Delete booking with $(bookingOjb.tutor_name)?')) {
      deleteBooking(bookingObj?.firebaseKey).then(() => onUpdate());
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
                <Image src={tutor?.image} alt="tutor image" thumbnail />
              </Col>
              <Col>
                <h3>Date and Time</h3>
                <p>You have an upcoming session with <strong>{tutor?.tutor_name}</strong>. Please note that <strong>{tutor?.tutor_name}</strong> requires 8hrs notice to cancel at no charge.</p>
                <h5>${tutor?.rate} for one hour.</h5>
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
    image: PropTypes.string,
    tutorKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default BookingCard;
