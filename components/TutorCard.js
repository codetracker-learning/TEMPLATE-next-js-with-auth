import PropTypes from 'prop-types';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';

export default function TutorCard({ tutorObj }) {
  return (
    <>
      <Card style={{
        height: '400px',
        width: '18rem',
        margin: '10px',
        cursor: 'pointer',
      }}
      >
        <Image variant="top" src={tutorObj?.image} alt={tutorObj?.tutor_name} />
        <div>
          <h4 className="card-text bold">{tutorObj?.tutor_name}</h4>
          <p>Subjects: {tutorObj?.subject}</p>
          <p className="card-text-bold">${tutorObj?.rate} per hour</p>
          <Button variant="success">Learn more about {tutorObj?.tutor_name}</Button>
        </div>
      </Card>
    </>
  );
}

TutorCard.propTypes = {
  tutorObj: PropTypes.shape({
    image: PropTypes.string,
    tutor_name: PropTypes.string,
    subject: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
};
