import { useEffect, useState } from 'react';
import BookingCard from '../../components/BookingCard';
import { getAllBookings } from '../../api/tutorbookingdata';
import { useAuth } from '../../utils/context/authContext';

export default function ViewMyBookings() {
  const [bookings, setbookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getAllBookings(user.uid).then(setbookings);
  }, [user.uid]);

  const refreshBooking = () => {
    getAllBookings().then(setbookings);
  };

  return (
    <div className="d-flex flex-wrap">
      {/* map over bookings here using bookingcard component */}
      {bookings.map((booking) => (
        <BookingCard key={booking.firebaseKey} bookingObj={booking} onUpdate={refreshBooking} />
      ))}
    </div>
  );
}
