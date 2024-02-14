import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AddBookingForm from '../../../components/AddBookingForm';
import { getSingleBooking } from '../../../api/tutorbookingdata';

export default function EditBooking() {
  const [booking, setbooking] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleBooking(firebaseKey).then(setbooking);
  }, [firebaseKey]);

  return (
    <AddBookingForm obj={booking} />
  );
}
