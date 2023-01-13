import { Navigation } from '../Navigation';
import { UserMenu } from '../UserMenu';
import { AuthNav } from '../AuthNav';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
