import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
// import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { updateBooking, createBooking } from '../api/tutorbookingdata';

// const initialState = {
//   tutor_name: 'Tutor Name',
//   student_email: 'Student Email',
//   date_time: '',
//   problem: '',

// };

export default function AddBookingForm({
  tutorName, bookingObj, tutorKey, tutorRate, tutorSubject,
}) {
  const [formInput, setFormInput] = useState([]);
  const router = useRouter();
  const user = useAuth();

  useEffect(() => {
    if (bookingObj?.firebaseKey) setFormInput(bookingObj);
  }, [bookingObj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookingObj?.firebaseKey) {
      updateBooking(formInput).then(() => router.push('/bookings/mybookings'));
    } else {
      const payload = { ...formInput, uid: user.uid, tutorKey };
      createBooking(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateBooking(patchPayload).then(() => {
          router.push('/bookings/mybookings');
        });
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="booking-form">{bookingObj?.firebaseKey ? 'Update' : 'Schedule'} {tutorSubject} Session with {tutorName}</h2>

      {/* TUTOR NAME INPUT */}
      <FloatingLabel controlId="floatingInput1" label="Tutor Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Tutor Name"
          name="tutor_name"
          value={tutorName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* TUTOR RATE */}
      <FloatingLabel controlId="floatingInput1" label="Rate per Hour (US dollars)" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Rate"
          name="tutor rate"
          value={tutorRate}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* REQUESTED DATE  */}
      <FloatingLabel controlId="floatingInput2" label="Requested Date mm/dd/yyyy" className="mb-3">
        <Form.Control
          type="text"
          placeholder="date"
          name="date"
          value={formInput.date}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* REQUESTED TIME  */}
      <FloatingLabel controlId="floatingInput2" label="Requested Time" className="mb-3">
        <Form.Control
          type="text"
          placeholder="time"
          name="time"
          value={formInput.time}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* PROBLEM TEXTAREA  */}
      <FloatingLabel controlId="floatingTextarea" label="What do you need help with?" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="problem"
          style={{ height: '100px' }}
          name="description"
          value={formInput.problem}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* <Link href="/bookings/mybookings" passHref> */}
      <Button style={{ background: '#e3740d' }} type="submit">{bookingObj?.firebaseKey ? 'Update' : 'Create'} Booking</Button>
      {/* </Link> */}
    </Form>

  );
}

AddBookingForm.propTypes = {
  bookingObj: PropTypes.shape({
    // tutor_name: PropTypes.string,
    firebaseKey: PropTypes.string,
    problem: PropTypes.string,
    // student_email: PropTypes.string,
    subject: PropTypes.string,
  }).isRequired,
  tutorName: PropTypes.string.isRequired,
  tutorKey: PropTypes.string.isRequired,
  tutorRate: PropTypes.number.isRequired,
  tutorSubject: PropTypes.string.isRequired,

};
