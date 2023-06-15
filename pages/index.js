import Link from 'next/link';
import {
  Row, Image, Card, Col, Button,
} from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';

function Home() {
  // const { user } = useAuth();

  return (
    <div>

      <Row className="splash-container">
        <Image src="https://media.licdn.com/dms/image/C4D12AQE5pnbLO0rUwQ/article-cover_image-shrink_600_2000/0/1609166555740?e=2147483647&v=beta&t=LCQ8iCfb3k00GzGL7Of5yASwDTUIKusftOBSaKowj2M" id="splash" fluid />
        <Link passHref href="/tutors/viewTutors">
          <Button variant="light" className="find-tutor">Find A Tutor</Button>
        </Link>
      </Row>
      <Row className="card-section">
        <Col>
          <Card className="w3-card-4 mt-5 mb-5">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
        <Col>
          <Card className="w3-card-4 mt-5 mb-5">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
        <Col>
          <Card className="w3-card-4 mt-5 mb-5">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>

      </Row>

    </div>
  );
}

export default Home;
