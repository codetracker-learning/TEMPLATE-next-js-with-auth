import PropTypes from 'prop-types';
// import useState from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteTutor, getAllTutors } from '../api/tutorData';

function TutorCardEdit({ tutorObj, onUpdate }) {
  const deleteThisTutor = () => {
    if (window.confirm('Delete Tutor')) {
      deleteTutor(tutorObj?.firebaseKey).then(() => onUpdate(getAllTutors));
    }
  };

  return (

    <Card className="horizontal-card">
      <Card.Img src={tutorObj.image} />
      <Card.Body>
        <Card.Title>{tutorObj.tutor_name}</Card.Title>
        <p className="description-clamp">{tutorObj.bio}</p>
        <p>${tutorObj.rate} per hour</p>
        <Link href={`/tutors/edit/${tutorObj.firebaseKey}`} passHref>
          <Button variant="info">Edit Tutor</Button>
        </Link>
        <Link href="/tutors/manageTutors" passHref>
          <Button variant="secondary" className="m-2" onClick={deleteThisTutor}>Delete Tutor</Button>
        </Link>

      </Card.Body>
    </Card>

  );
}

TutorCardEdit.propTypes = {
  tutorObj: PropTypes.shape({
    image: PropTypes.string,
    tutor_name: PropTypes.string,
    subject: PropTypes.string,
    rate: PropTypes.number,
    bio: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TutorCardEdit;
