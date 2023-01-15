import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Section } from './pages.styled';

export default function Register() {
  return (
    <Section>
      <div>
        <title>Registration</title>
      </div>
      <RegisterForm />
    </Section>
  );
}
