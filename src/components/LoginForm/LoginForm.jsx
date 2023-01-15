import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/service';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { BsKey } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import {
  SubmitBtn,
  VisibleBtn,
  LableInput,
  LableInputWrapper,
  Form,
  SectionFormInput,
  Input,
  Icon,
  Label,
} from './LoginForm.styled';

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
    <SectionFormInput>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <LableInput>
          <Label>email</Label>
          <LableInputWrapper>
            <Icon>
              <HiOutlineMail
                style={{
                  width: '24',
                  height: '24',
                  verticalAlign: 'middle',
                }}
              />
            </Icon>
            <Input type="email" name="email" onChange={handleInput} />
          </LableInputWrapper>
        </LableInput>
        <LableInput>
          <Label>password</Label>
          <LableInputWrapper>
            <Icon>
              <BsKey
                style={{
                  width: '24',
                  height: '24',
                  verticalAlign: 'middle',
                }}
              />
            </Icon>
            <Input
              type={isVisiblePassword ? 'text' : 'password'}
              name="password"
              onChange={handleInput}
            />
            <VisibleBtn type="button" onClick={handleVisiblePassword}>
              {isVisiblePassword ? (
                <MdOutlineVisibility
                  style={{
                    width: '20',
                    height: '20',
                    verticalAlign: 'middle',
                  }}
                />
              ) : (
                <MdOutlineVisibilityOff
                  style={{
                    width: '20',
                    height: '20',
                    verticalAlign: 'middle',
                  }}
                />
              )}
            </VisibleBtn>
          </LableInputWrapper>
        </LableInput>
        <SubmitBtn type="submit">Log In</SubmitBtn>
      </Form>
    </SectionFormInput>
  );
};
