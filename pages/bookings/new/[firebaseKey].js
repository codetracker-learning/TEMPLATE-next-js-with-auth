import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AddBookingForm from '../../../components/AddBookingForm';
import { getSingleTutor } from '../../../api/tutorData';

export default function AddBooking() {
  const [tutor, setTutor] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTutor(firebaseKey).then(setTutor);
  }, [firebaseKey]);

  return (
    <AddBookingForm tutorName={tutor.tutor_name} tutorRate={tutor.rate} />
  );
}
