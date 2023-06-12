import { useEffect, useState } from 'react';
import {
  Container, Form, Row, Col,
} from 'react-bootstrap';
import TutorCard from '../../components/TutorCard';
import { getAllTutors } from '../../api/tutorData';
import { useAuth } from '../../utils/context/authContext';

export default function ViewTutors() {
  const [tutors, setTutors] = useState([]);
  const { user } = useAuth();
  const [searchText, setSearchText] = useState('');
  const [filteredTutors, setFilteredTutors] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchText(input);
    const filtered = tutors.filter((tutor) => (input === '' ? true : tutor.subject.toLowerCase().startsWith(input.toLowerCase())));
    setFilteredTutors(filtered);
  };

  useEffect(() => {
    getAllTutors().then((tutorsData) => {
      setTutors(tutorsData);
      setFilteredTutors(tutorsData);
    });
  }, [user]);

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Search Tutors by Subject</Form.Label>
              <Form.Control type="text" placeholder="ie Java..." value={searchText} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex flex-wrap">

            {/* map over tutors here using tutorcard component */}
            {filteredTutors.map((tutor) => (
              <TutorCard key={tutor.firebaseKey} tutorObj={tutor} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
