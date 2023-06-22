import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
// import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
    <Container className="bookingform-container">
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

        {/* TIME SELECT  */}
        <FloatingLabel controlId="floatingSelect" label="Requested Time" className="mb-3">
          <Form.Select
            name="time"
            onChange={handleChange}
            value={formInput.time}
          >
            <option>24hr Format</option>
            <option value="0700">0700</option>
            <option value="0800">0800</option>
            <option value="0900">0900</option>
            <option value="1000">1000</option>
            <option value="1100">1100</option>
            <option value="1200">1200</option>
            <option value="1300">1300</option>
            <option value="1400">1400</option>
            <option value="1500">1500</option>
            <option value="1600">1600</option>
            <option value="1700">1700</option>
            <option value="1900">1900</option>
            <option value="2000">2000</option>
            <option value="2100">2100</option>

          </Form.Select>
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
        <Button style={{ background: '#e3740d', marginBottom: '5%' }} type="submit">{bookingObj?.firebaseKey ? 'Update' : 'Create'} Booking</Button>
        {/* </Link> */}
      </Form>
    </Container>

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
