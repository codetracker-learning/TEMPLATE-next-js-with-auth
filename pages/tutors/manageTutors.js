import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
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
    <>
      <div className="createtutor-btn">
        <Link href="/tutors/new" passHref>
          <Button style={{ background: '#e3740d', borderRadius: '20px' }}>Create a Tutor</Button>
        </Link>
      </div>

      <div className="managetutor-cards">
        {/* map over tutors here using tutorcard component */}
        {tutors.map((tutor) => (
          <TutorCardEdit key={tutor?.firebaseKey} tutorObj={tutor} onUpdate={refreshTutors} />
        ))}
      </div>
    </>
  );
}
