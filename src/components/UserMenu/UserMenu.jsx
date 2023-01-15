import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/service';

import { Btn, Username } from './UserMenu.styled';
import { GiExitDoor } from 'react-icons/gi';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p>
        Welcome, <Username>{user.name}</Username>
      </p>
      <Btn type="button" onClick={handleOut}>
        Log out
        <GiExitDoor
          style={{
            width: '20',
            height: '20',
            verticalAlign: 'middle',
          }}
        />
      </Btn>
    </>
  );
};

export default UserMenu;
