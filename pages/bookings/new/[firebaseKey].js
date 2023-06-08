import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AddBookingForm from '../../../components/AddBookingForm';
import { getSingleTutor } from '../../../api/tutorData';
import { createBooking, updateBooking } from '../../../api/tutorbookingdata';
import { useAuth } from '../../../utils/context/authContext';

export default function AddBooking() {
  const [tutor, setTutor] = useState([]);
  const [booking, setBooking] = useState(null);
  const router = useRouter();
  const { firebaseKey } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    getSingleTutor(firebaseKey).then(setTutor);
  }, [firebaseKey]);

  useEffect(() => {
    const payload = { uid: user.uid, tutorKey: tutor.firebaseKey };
    createBooking(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateBooking(patchPayload).then((newBooking) => {
        setBooking(newBooking);
      });
    });
  }, [user.uid, tutor.firebaseKey]);
  return (
    <AddBookingForm tutorName={tutor.tutor_name} tutorRate={tutor.rate} bookingObj={booking} />
  );
}
