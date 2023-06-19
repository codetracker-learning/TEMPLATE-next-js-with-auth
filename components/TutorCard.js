import PropTypes from 'prop-types';
// import useState from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function TutorCard({ tutorObj }) {
  return (
    <Link href={`/tutors/profile/${tutorObj.firebaseKey}`} passHref>
      <Card style={{ width: '18rem' }} className="horizontal-card">
        <div className="card-background">
          <Card.Img className="inner-image" src={tutorObj.image} />
        </div>
        <Card.Body className="card-body2">
          <Card.Title className="tutorcard-name">{tutorObj.tutor_name}</Card.Title>
          <p className="description-clamp">{tutorObj?.bio}</p>
          <h6>{tutorObj?.subject}</h6>
          <p>${tutorObj?.rate} per hour</p>
          <Link href={`/tutors/profile/${tutorObj.firebaseKey}`} passHref>
            <Button style={{ background: '#e3740d', color: 'white' }}>View Profile</Button>
          </Link>
          <Link href={`/bookings/new/${tutorObj.firebaseKey}`} passHref>
            <Button style={{ background: '#e3740d', color: 'white' }} className="m-2"><FontAwesomeIcon icon={faCalendar} style={{ color: 'white' }} /> Book</Button>
          </Link>

        </Card.Body>
      </Card>
    </Link>

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
