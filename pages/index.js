import Link from 'next/link';
import {
  Row, Image, Card, Col, Button,
} from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faVideo, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

function Home() {
  // const { user } = useAuth();

  return (
    <div className="splash-cards">

      <Row className="splash-container">
        <Image src="https://media.licdn.com/dms/image/C4D12AQE5pnbLO0rUwQ/article-cover_image-shrink_600_2000/0/1609166555740?e=2147483647&v=beta&t=LCQ8iCfb3k00GzGL7Of5yASwDTUIKusftOBSaKowj2M" id="splash" fluid />
        <Link passHref href="/tutors/viewTutors">
          <Button style={{ backgroundColor: '#e3740d', width: '200px', borderRadius: '50rem' }} className="find-tutor">Find A Tutor</Button>
        </Link>
      </Row>
      <Row className="card-section">
        <Col>
          <Card className="splash-card">
            <Card.Body>
              <FontAwesomeIcon icon={faChalkboardUser} size="2xl" style={{ color: '#e3704d' }} />              <Card.Title>Live Virtual Sessions</Card.Title>
              <Card.Text>
                Get help from experts in the comfort of your own home.
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
        <Col>
          <Card className="splash-card">
            <Card.Body>
              <FontAwesomeIcon icon={faDollarSign} size="2xl" style={{ color: '#e3740d' }} />
              <Card.Title>Upfront Pricing</Card.Title>
              <Card.Text>
                Clear and upfront pricing. Easily find a tutor to fit your budget.
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
        <Col>
          <Card className="splash-card">
            <Card.Body>
              <FontAwesomeIcon icon={faVideo} size="2xl" style={{ color: '#e3740d' }} />
              <Card.Title>Recorded Sessions</Card.Title>
              <Card.Text>
                Access to recording of your tutoring session in your student dashboard.
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>

      </Row>

    </div>
  );
}

export default Home;
