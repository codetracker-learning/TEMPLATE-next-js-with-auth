import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleTutor } from '../../../api/tutorData';
import AddTutorForm from '../../../components/AddTutorForm';

export default function EditTutor() {
  const [tutor, setTutor] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTutor(firebaseKey).then(setTutor);
  }, [firebaseKey]);

  return (
    <AddTutorForm obj={tutor} />
  );
}
