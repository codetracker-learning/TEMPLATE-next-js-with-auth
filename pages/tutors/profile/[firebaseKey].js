import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUserGraduate, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
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
          <h6>Subjects: {tutor?.subject?.map((sub) => (
            <span style={{ color: '#e3740d' }}>{sub} </span>
          ))}
          </h6>
          <hr />
          <FontAwesomeIcon icon={faBookOpen} size="xl" style={{ color: '#e67d05' }} />
          <p style={{
            color: '434649', fontSize: 'medium', fontWeight: '600', marginTop: '4px',
          }}
          >{tutor.bio}
          </p>
          <hr />
          <FontAwesomeIcon icon={faUserGraduate} size="xl" style={{ color: '#e67d05' }} />
          <p style={{
            color: '434649', fontSize: 'medium', fontWeight: '600', marginTop: '4px',
          }}
          > {tutor.education}
          </p>
          <hr />
          <FontAwesomeIcon icon={faMoneyCheckDollar} size="xl" style={{ color: '#e67d05' }} />
          <p style={{ color: '#e3740d', fontWeight: 'bold', marginTop: '4px' }}>${tutor.rate} per hour</p>
        </Col>
      </Row>
    </Container>
  );
}
