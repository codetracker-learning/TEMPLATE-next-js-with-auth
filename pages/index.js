import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div
      id="splash"
      className="text-center d-flex flex-column justify-content-center align-content-center"

    >
      <h1>Hello {user.displayName}! </h1>
      <p>Click the button below to logout!</p>
    </div>
  );
}

export default Home;
