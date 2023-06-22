import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getAllTutors } from '../../api/tutorData';
import { useAuth } from '../../utils/context/authContext';
import TutorCardEdit from '../../components/TutorCardEdit';

export default function ViewTutors() {
  const [tutors, setTutors] = useState([]);
  const { user } = useAuth();

  // const seeTutorCards = () => {
  // };

  useEffect(() => {
    getAllTutors().then(setTutors);
  }, [user]);

  const refreshTutors = () => {
    getAllTutors().then(setTutors);
  };

  return (

    <div className="managetutor-cards">
      <div>
        <Link href="/tutors/new" passHref>
          <Button style={{ background: '#e3740d', borderRadius: '20px' }}>Create a Tutor</Button>
        </Link>
      </div>
      {/* map over tutors here using tutorcard component */}
      {tutors.map((tutor) => (
        <TutorCardEdit key={tutor?.firebaseKey} tutorObj={tutor} onUpdate={refreshTutors} />
      ))}
    </div>
  );
}
