import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/service';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const dispatch = useDispatch();

  const handleVisiblePassword = () => setIsVisiblePassword(visible => !visible);

  const handleInput = event => {
    const e = event.currentTarget.name;
    const value = event.currentTarget.value;
    switch (e) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
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
      <button type="submit">Log In</button>
    </form>
  );
};
