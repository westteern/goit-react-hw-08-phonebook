import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passVerification, setPassVerification] = useState('');

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisiblePassVerification, setIsVisiblePassVerification] =
    useState(false);
  const handleVisiblePassword = () => setIsVisiblePassword(visible => !visible);
  const handleVisiblePassVerification = () =>
    setIsVisiblePassVerification(visible => !visible);

  const handleInput = event => {
    const e = event.currentTarget.name;
    const value = event.currentTarget.value;
    switch (e) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirm':
        setPassVerification(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      passVerification === ''
    ) {
      toast.error('All fields must be filled');
      return;
    }
    if (password.length < 8) {
      toast.error('The password must contain at least 8 characters');
      return;
    }
    if (password !== passVerification) {
      toast.error('Passwords do not match');
      return;
    }
    const form = e.currentTarget;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" onChange={handleInput} />
      </label>
      <label>
        Email
        <input type="email" name="email" onChange={handleInput} />
      </label>
      <label>
        Password
        <input
          type={isVisiblePassword ? 'text' : 'password'}
          name="password"
          onChange={handleInput}
        />
        <button type="button" onClick={handleVisiblePassword}>
          Visible
        </button>
      </label>
      <label>
        Confirm password
        <input
          type={isVisiblePassVerification ? 'text' : 'password'}
          name="confirm"
          onChange={handleInput}
        />
      </label>
      <button type="button" onClick={handleVisiblePassVerification}>
        Visible
      </button>
      <button type="submit">Register</button>
    </form>
  );
};
