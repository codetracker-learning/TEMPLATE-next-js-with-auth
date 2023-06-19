import PropTypes from 'prop-types';
import {
  Container, Row, Image, Col,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
import { deleteBooking } from '../api/tutorbookingdata';
import { getSingleTutor } from '../api/tutorData';

function BookingCard({ bookingObj, onUpdate }) {
  const [tutor, setTutor] = useState();
  useEffect(() => {
    getSingleTutor(bookingObj?.tutorKey).then(setTutor);
  }, [bookingObj?.tutorKey, setTutor]);
  const deleteThisBooking = () => {
    if (window.confirm('Delete booking?')) {
      deleteBooking(bookingObj?.firebaseKey).then(() => onUpdate(setTutor));
    }
  };

  return (
    <Card className="mt-5 booking-card-container">
      <Card.Header as="h5" style={{ background: '#e3740d', color: 'white' }}>Scheduled Lesson</Card.Header>
      <Card.Body style={{ backgroundColor: '#e3e3e3' }}>
        <div>
          <Container>
            <Row>
              <Col xs={3}>
                <Image className="booking-img" src={tutor?.image} alt="tutor image" height="200px" width="200px" />
              </Col>
              <Col>
                <div>
                  <h5>{bookingObj?.date} at {bookingObj?.time}</h5>
                  <p>You have an upcoming session with <strong>{tutor?.tutor_name}</strong>. Please note that <strong>{tutor?.tutor_name}</strong> requires 8hrs notice to cancel at no charge.</p>
                  <h5>${tutor?.rate} for one hour.</h5>
                  <Button className="cancel-btn" variant="secondary" onClick={deleteThisBooking}>Cancel Booking</Button>
                  <Button style={{ background: '#e3740d', color: 'white' }}>Join Session</Button>
                </div>
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
    date: PropTypes.string,
    time: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default BookingCard;
