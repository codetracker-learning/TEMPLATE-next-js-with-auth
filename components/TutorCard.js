import PropTypes from 'prop-types';
// import useState from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function TutorCard({ tutorObj }) {
  return (
    <Card className="horizontal-card">
      <Card.Img src={tutorObj.image} />
      <Card.Body>
        <Card.Title>{tutorObj.tutor_name}</Card.Title>
        <p className="description-clamp">{tutorObj?.bio}</p>
        <h6>{tutorObj?.subject}</h6>
        <p>${tutorObj?.rate} per hour</p>
        <Link href={`/tutors/profile/${tutorObj.firebaseKey}`} passHref>
          <Button variant="info">View Profile</Button>
        </Link>
        <Link href={`/bookings/new/${tutorObj.firebaseKey}`} passHref>
          <Button variant="info" className="m-2"><FontAwesomeIcon icon={faCalendar} style={{ color: 'white' }} /> Book {tutorObj.tutor_name}</Button>
        </Link>

      </Card.Body>
    </Card>

  );
}

TutorCard.propTypes = {
  tutorObj: PropTypes.shape({
    image: PropTypes.string,
    tutor_name: PropTypes.string,
    subject: PropTypes.string,
    rate: PropTypes.number,
    bio: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
