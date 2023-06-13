import { Row, Image } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div>

      <Row>
        <Image src="https://media.licdn.com/dms/image/C4D12AQE5pnbLO0rUwQ/article-cover_image-shrink_600_2000/0/1609166555740?e=2147483647&v=beta&t=LCQ8iCfb3k00GzGL7Of5yASwDTUIKusftOBSaKowj2M" id="splash" fluid />
      </Row>
      <Row>
      <h1>Hello {user.displayName}! </h1>
        <p>Click the button below to logout!</p>

      </Row>
    </div>
  );
}

export default Home;
