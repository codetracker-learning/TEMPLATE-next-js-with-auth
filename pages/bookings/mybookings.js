import { useEffect, useState } from 'react';
import BookingCard from '../../components/BookingCard';
import { getAllBookings } from '../../api/tutorbookingdata';
import { useAuth } from '../../utils/context/authContext';

export default function ViewMyBookings() {
  const [bookings, setbookings] = useState([]);
  const { user } = useAuth();

  // const seeTutorCards = () => {
  // };

  useEffect(() => {
    getAllBookings().then(setbookings);
  }, [user]);

  return (
    <div className="d-flex flex-wrap">
      {/* map over tutors here using tutorcard component */}
      {bookings.map((booking) => (
        <BookingCard key={booking.firebaseKey} bookingObj={booking} />
      ))}
    </div>
  );
}
