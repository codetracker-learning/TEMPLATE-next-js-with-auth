import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getSingleTutor } from '../../../api/tutorData';

export default function ProfilePage() {
  const [tutor, setTutor] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTutor(firebaseKey).then(setTutor);
  }, [firebaseKey]);

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Image src={tutor.image} alt="tutor name" thumbnail />
          <Link href={`/bookings/new/${tutor.firebaseKey}`} passHref>
            <Button>Book {tutor.tutor_name}</Button>
          </Link>
        </Col>
        <Col>
          <h2>{tutor.tutor_name}</h2>
          <h5>Subjects: {tutor.subject}</h5>
          <hr />
          <p>{tutor.bio}</p>
          <hr />
          <p>Education: {tutor.education}</p>
          <span style={{ color: 'green', fontWeight: 'bold' }}>Rate: ${tutor.rate} per hour</span>
        </Col>
      </Row>
    </Container>
  );
}
