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

    <Card style={{ width: '18rem' }} className="horizontal-card">
      <div className="card-background">
        <Card.Img className="inner-image" src={tutorObj.image} />
      </div>
      <Card.Body className="card-body2">
        <Card.Title>{tutorObj.tutor_name}</Card.Title>
        <p className="description-clamp">{tutorObj.bio}</p>
        {tutorObj?.subject?.map((sub) => (
          <span>{sub} </span>
        ))}

        <p>${tutorObj.rate} per hour</p>
        <Link href={`/tutors/edit/${tutorObj.firebaseKey}`} passHref>
          <Button style={{ background: '#e3740d', color: 'white' }}>Edit Tutor</Button>
        </Link>
        <Link href="/tutors/manageTutors" passHref>
          <Button style={{ background: '#e3740d', color: 'white' }} className="m-2" onClick={deleteThisTutor}>Delete Tutor</Button>
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
