import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createUser } from '../../api/User';
import Button from '../../components/Button';
import PasswordRequirements from '../../components/PasswordRequirements';
import Text from '../../components/Text';
import CheckFormInputs from '../../utils/CheckFormInputs';
import { PASSWORD_REQUIREMENTS } from '../../utils/Constants';
import { Container, FormContainer, FormInput, Wrapper } from './styled';

function Onboarding() {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const [showPWRequirements, setShowPwRequirements] = useState(false);
  const [requirements, setRequirements] = useState(PASSWORD_REQUIREMENTS);

  // const [authenticating, setAuthenticating] = useState(false);

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  function handleInputChange(e, type) {
    e.persist();
    if (type === 'name') {
      setInputs(prevState => {
        return { ...prevState, name: e.target.value };
      });
    } else if (type === 'email') {
      setInputs(prevState => {
        return { ...prevState, email: e.target.value };
      });
    } else {
      setInputs(prevState => {
        const { password } = { ...prevState, password: e.target.value };

        setRequirements(oldState => {
          const state = oldState;

          if (/[A-Z]/.test(password)) state[0] = [state[0][0], true];
          else state[0] = [state[0][0], false];

          if (/[a-z]/.test(password)) state[1] = [state[1][0], true];
          else state[1] = [state[1][0], false];

          if (/[0-9]/.test(password)) state[2] = [state[2][0], true];
          else state[2] = [state[2][0], false];

          // TODO: Regex for special characters is incorrect.
          if (/[!@#$%^&*)(+=._-]*/.test(password))
            state[3] = [state[3][0], true];
          else state[3] = [state[3][0], false];

          if (password.length > 8) state[4] = [state[4][0], true];
          else state[4] = [state[4][0], false];

          return state;
        });

        return { ...prevState, password: e.target.value };
      });
    }
  }

  function handleFocus() {
    if (path === 'login') return;

    setShowPwRequirements(prevState => !prevState);
  }

  async function handleSubmit() {
    // setAuthenticating(prevState => !prevState);
    const errors = CheckFormInputs(inputs, requirements);

    if (errors.length === 0) {
      const [firstName, ...lastName] = inputs.name.split(' ');
      const response = await createUser({
        firstName,
        lastName: lastName.length > 0 ? lastName : '',
        email: inputs.email,
        password: inputs.password
      });
      if (response.status === 201 || response.status === 200) {
        setInputs(() => {
          return {
            name: '',
            email: '',
            password: ''
          };
        });
      } else {
        console.log(response.data.data);
      }
    }
  }

  return (
    <Wrapper>
      <Container>
        <FormContainer>
          <Text
            margin-top='32px'
            margin-left='-5px'
            font-style='normal'
            font-weight='bold'
            font-size='24px'
            line-height='32px'
            color='#030F09'>
            {path === 'login' ? 'Welcome Back' : 'Start Sculpting'}
          </Text>
          <Text
            margin-top='10px'
            font-style='normal'
            font-weight='normal'
            font-size='14px'
            line-height='22px'
            color='#606060'>
            {path === 'login'
              ? 'Please login to continue'
              : 'Create account to continue'}
          </Text>
          {path !== 'login' && (
            <>
              <Text
                margin-top='45px'
                font-style='normal'
                font-weight='normal'
                font-size='14px'
                line-height='22px'
                color='#A8A8A8'>
                Full Name
              </Text>
              <FormInput
                // ref={nameRef}
                type='text'
                margin-top='10px'
                value={inputs.name}
                onChange={e => handleInputChange(e, 'name')}
                // autoFocus
              />
            </>
          )}
          <Text
            margin-top={path === 'login' ? '60px' : '30px'}
            font-style='normal'
            font-weight='normal'
            font-size='14px'
            line-height='22px'
            color='#A8A8A8'>
            Email address
          </Text>
          <FormInput
            // ref={emailRef}
            type='email'
            margin-top='10px'
            value={inputs.email}
            onChange={e => handleInputChange(e, 'email')}
            // autoFocus
          />
          <Text
            margin-top='30px'
            font-style='normal'
            font-weight='normal'
            font-size='14px'
            line-height='22px'
            color='#A8A8A8'>
            Password
          </Text>
          <FormInput
            // ref={passwordRef}
            type='password'
            margin-top='10px'
            value={inputs.password}
            onChange={e => handleInputChange(e, 'password')}
            onFocus={handleFocus}
            onBlur={handleFocus}
          />
          {path !== 'login' && showPWRequirements && (
            <PasswordRequirements items={requirements} />
          )}
          <Button
            margin='25px 0 0 0'
            width='calc(100% - 26px)'
            onClick={handleSubmit}>
            {/* {!authenticating */}
            {/* ? */}
            {path === 'login' ? 'Login' : 'Sign Up'}
            {/* : <Spinner />} */}
          </Button>
          <Text
            width='calc(100% - 32px)'
            margin-top='30px'
            font-style='normal'
            font-weight='normal'
            font-size='14px'
            line-height='22px'
            text-align='center'
            color='#A8A8A8'>
            {path === 'login' ? 'New to Sculptor?' : 'Already have an account?'}
          </Text>
          <Link to={path === 'login' ? '/signup' : '/login'}>
            <Text
              margin-top='10px'
              margin-bottom='16px'
              width='calc(100% - 32px)'
              font-style='normal'
              font-weight='bold'
              font-size='16px'
              line-height='22px'
              text-align='center'
              letter-spacing='0.32px'
              color='#30BE76'>
              {path === 'login' ? 'Create Account Here' : 'Login Here'}
            </Text>
          </Link>
        </FormContainer>
      </Container>
    </Wrapper>
  );
}

export default Onboarding;

// TODO: Autofocus input field

// TODO: Change color of input fields on errors
// const nameRef = useRef();
// const emailRef = useRef();
// const passwordRef = useRef();

// } else {
//   const { current: nameInput } = nameRef;
//   const { current: emailInput } = emailRef;
//   const { current: passwordInput } = passwordRef;

//   errors.forEach(obj => {
//     // const { email, password } = obj;
//     // console.log(email, password);
//   });

//   // errors.forEach(obj => {
//   //   c

//   //   if (key === 'email') {
//   //     console.log(emailInput);
//   //     // emailInput.css.color = 'red';
//   //     // emailInput.placeholder = value;
//   //   }
//   // });
// }
