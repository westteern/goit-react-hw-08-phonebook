import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operatons';

const UserMenu = () => {
  const { username } = useAuth();
  const dispatch = useDispatch();

  const handleOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <h2>Welcome, {username}</h2>
      <button type="button" onClick={handleOut}>
        Log out
      </button>
    </>
  );
};

export default UserMenu;
