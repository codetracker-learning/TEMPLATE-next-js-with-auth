import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faFacebook, faDiscord } from '@fortawesome/free-solid-svg-icons';
import { getSingleTutor } from '../../../api/tutorData';

export default function ProfilePage() {
  const [tutor, setTutor] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTutor(firebaseKey).then(setTutor);
  }, [firebaseKey]);

  return (
    <Container className="profile-page">
      <Row className="mt-5">
        <Col>
          <Image className="profile-image" src={tutor.image} alt="tutor name" />
          <Link href={`/bookings/new/${tutor.firebaseKey}`} passHref>
            <Button className="profile-bookingbtn">Book {tutor.tutor_name}</Button>
          </Link>
        </Col>
        <Col>
          <h2 style={{ color: '#e3740d' }}>{tutor.tutor_name}</h2>
          <h5 style={{ color: '#e3740d' }}>Subjects: {tutor.subject}</h5>
          <hr />
          <p>{tutor.bio}</p>
          <hr />
          <p>Education: {tutor.education}</p>
          <span style={{ color: '#e3740d', fontWeight: 'bold' }}>Rate: ${tutor.rate} per hour</span>
          <h6 style={{ color: '#e3740d' }}>Join Me On: </h6>
          <span className="fa-stack">
            <FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: '#ea7f06' }} />
            <FontAwesomeIcon icon={faTwitch} size="xl" style={{ color: '#ea7406' }} />
            <FontAwesomeIcon icon={faDiscord} size="xl" style={{ color: '#e0870b' }} />
          </span>
        </Col>
      </Row>
    </Container>
  );
}
