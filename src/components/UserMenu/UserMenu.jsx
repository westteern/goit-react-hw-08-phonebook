import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/service';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <h2>Welcome, {user.name}</h2>
      <button type="button" onClick={handleOut}>
        Log out
      </button>
    </>
  );
};

export default UserMenu;
