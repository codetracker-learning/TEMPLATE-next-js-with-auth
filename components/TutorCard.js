import PropTypes from 'prop-types';
// import useState from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';

export default function TutorCard({ tutorObj }) {
  return (
    <div className="horizontal-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img src={tutorObj.image} />
        <Card.Body>
          <Card.Title>{tutorObj.tutor_name}</Card.Title>
          <p>{tutorObj.bio}</p>
          <p>${tutorObj.rate} per hour</p>
          <Button variant="info">View Profile</Button>
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
  }).isRequired,
};
