import { useEffect, useState } from 'react';
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

  return (
    <div className="d-flex flex-wrap">
      {/* map over tutors here using tutorcard component */}
      {tutors.map((tutor) => (
        <TutorCardEdit key={tutor?.firebaseKey} tutorObj={tutor} onUpdate={getAllTutors} />
      ))}
    </div>
  );
}
