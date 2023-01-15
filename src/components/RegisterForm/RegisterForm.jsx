import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BsKey } from 'react-icons/bs';

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
} from './RegisterForm.styled';

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
    <SectionFormInput>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <LableInput>
          <Label>username</Label>
          <LableInputWrapper>
            <Icon>
              <BsFillPersonFill
                style={{
                  width: '24',
                  height: '24',
                  verticalAlign: 'middle',
                }}
              />
            </Icon>
            <Input type="text" name="name" onChange={handleInput} />
          </LableInputWrapper>
        </LableInput>
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
        <LableInput>
          <Label>confirm password</Label>
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
              type={isVisiblePassVerification ? 'text' : 'password'}
              name="confirm"
              onChange={handleInput}
            />
            <VisibleBtn type="button" onClick={handleVisiblePassVerification}>
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
        <SubmitBtn type="submit">Register</SubmitBtn>
      </Form>
    </SectionFormInput>
  );
};
