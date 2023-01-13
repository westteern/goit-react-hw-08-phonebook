import { Link } from './Navigation.styled';
// import { useAuth } from 'hooks';

const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      {/* {isLoggedIn && <Link to="/contacts">Contacts</Link>} */}
    </nav>
  );
};

export default Navigation;
