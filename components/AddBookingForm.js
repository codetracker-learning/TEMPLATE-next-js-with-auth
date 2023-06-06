import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { updateBooking, createBooking } from '../api/tutorbookingdata';

const initialState = {
  tutor_name: 'Tutor Name',
  student_email: 'Student Email',
  date_time: '',
  problem: '',

};

export default function AddBookingForm({ obj }) {
  const [formInput, setFormInput] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateBooking(formInput).then(() => router.push('/bookings/new'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createBooking(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateBooking(patchPayload).then(() => {
          router.push('/bookings/new');
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
      <h2 className="text-green mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Tutor</h2>

      {/* TUTOR NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Tutor Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Tutor Name"
          name="tutor_name"
          value={formInput.tutor_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* STUDENT EMAIL INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Email Address" className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email Address"
          name="student_email"
          value={formInput.student_email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* DATE TIME INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Select Date and Time" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Select Date and Time"
          name="date and time"
          value={formInput.date_time}
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
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Booking</Button>
    </Form>

  );
}

AddBookingForm.propTypes = {
  obj: PropTypes.shape({
    tutor_name: PropTypes.string,
    firebaseKey: PropTypes.string,
    problem: PropTypes.string,
    student_email: PropTypes.string,
    subject: PropTypes.string,

  }),
};

AddBookingForm.defaultProps = {
  obj: initialState,
};
