import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { SectionAppBar } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <SectionAppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </SectionAppBar>
  );
};
