import { Section, Wellcome } from './pages.styled';

export default function Home() {
  return (
    <Section>
      <Wellcome>Welcome to our application "Phonebook"</Wellcome>
      <img
        src="https://cdn.pixabay.com/photo/2018/09/22/19/25/smartphone-3695936_1280.png"
        alt="wellcome"
      />
    </Section>
  );
}
