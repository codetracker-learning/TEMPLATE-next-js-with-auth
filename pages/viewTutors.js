import { useEffect, useState } from 'react';
import TutorCard from '../components/TutorCard';
import { getAllTutors } from '../api/tutorData';
import { useAuth } from '../utils/context/authContext';

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
        <TutorCard key={tutor.firebaseKey} tutorObj={tutor} />
      ))}
    </div>
  );
}
