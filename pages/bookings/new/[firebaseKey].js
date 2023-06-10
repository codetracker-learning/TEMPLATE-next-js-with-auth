import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AddBookingForm from '../../../components/AddBookingForm';
import { getSingleTutor } from '../../../api/tutorData';
import { useAuth } from '../../../utils/context/authContext';

export default function AddBooking() {
  const [tutor, setTutor] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    getSingleTutor(firebaseKey).then(setTutor);
  }, [firebaseKey, user.uid]);

  return (
    tutor?.firebaseKey ? <AddBookingForm tutorName={tutor.tutor_name} tutorRate={tutor.rate} tutorKey={tutor.firebaseKey} /> : null
  );
}
