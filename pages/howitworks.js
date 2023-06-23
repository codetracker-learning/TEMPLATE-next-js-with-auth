import { Container, Col, Row } from 'react-bootstrap';

function InfoPage() {
  return (
    <Container>
      <div>
        <Row className="info-video">
          <video autoPlay muted loop>
            <source src="https://player.vimeo.com/external/517732843.sd.mp4?s=f618272587627dc20a64eef0f7deb5c27e4f749c&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </Row>
      </div>

      <Row>
        <h1 className="infopageh1">Three easy steps to expert instruction</h1>
      </Row>

      <Row className="infopage-row">
        <Col className="infopage-numbercol">
          <h2 className="infopagecol">1</h2>
          <p>Search for an instructor that meets your needs. Our instructors are subject matter
            experts in their approved subjects.
          </p>
        </Col>
        <Col className="infopage-numbercol">
          <h2 className="infopagecol">2</h2>
          <p>Chat with your instructor about your needs. Messaging is made easy using the messaging feature on our site. You may also download our mobile app for instant communication.</p>
        </Col>
        <Col className="infopage-numbercol">
          <h2 className="infopagecol">3</h2>
          <p>Now that you have found an instructor, all that is left is to book your lesson.
            theTechacademy processes payment securely only after your lesson is completed.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoPage;
