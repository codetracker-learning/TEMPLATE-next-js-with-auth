import PropTypes from 'prop-types';
// import useState from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function TutorCard({ tutorObj }) {
  return (
    <div className="horizontal-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img src={tutorObj.image} />
        <Card.Body>
          <Card.Title>{tutorObj.tutor_name}</Card.Title>
          <p>{tutorObj?.bio}</p>
          <p>{tutorObj?.subject}</p>
          <p>${tutorObj?.rate} per hour</p>
          <Link href={`/tutors/profile/${tutorObj.firebaseKey}`} passHref>
            <Button variant="info">View Profile</Button>
          </Link>
          <Link href={`/bookings/new/${tutorObj.firebaseKey}`} passHref>
            <Button variant="info" className="m-2">Book {tutorObj.tutor_name}</Button>
          </Link>

        </Card.Body>
      </Card>
    </div>

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
