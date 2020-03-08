import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { createUser } from '../../api/User';
import PasswordRequirements from '../../components/PasswordRequirements';
import { useStore } from '../../Store';
import CheckFormInputs from '../../utils/CheckFormInputs';
import { PASSWORD_REQUIREMENTS } from '../../utils/Constants';
import {
  Container,
  FormContainer,
  FormInput,
  OnboardingButton,
  OnboardingText,
  Wrapper
} from './styled';

function ErrorText({ errors, compareKey }) {
  const index = errors.findIndex(({ errorFor }) => errorFor === compareKey);
  return (
    index !== -1 && (
      <OnboardingText marginTop='10px' fontSize='10px' color='#ff0000'>
        {errors[index].errorValue}
      </OnboardingText>
    )
  );
}

function Onboarding() {
  const { state, dispatch } = useStore();
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const [showPWRequirements, setShowPwRequirements] = useState(false);
  const [requirements, setRequirements] = useState(PASSWORD_REQUIREMENTS);
  const [showErrors, setShowError] = useState([]);

  const [authenticating, setAuthenticating] = useState(false);

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
          const pwrState = oldState;

          if (/[A-Z]/.test(password)) pwrState[0] = [pwrState[0][0], true];
          else pwrState[0] = [pwrState[0][0], false];

          if (/[a-z]/.test(password)) pwrState[1] = [pwrState[1][0], true];
          else pwrState[1] = [pwrState[1][0], false];

          if (/[0-9]/.test(password)) pwrState[2] = [pwrState[2][0], true];
          else pwrState[2] = [pwrState[2][0], false];

          // TODO: Regex for special characters is incorrect.
          if (/[!@#$%^&*)(+=._-]*/.test(password))
            pwrState[3] = [pwrState[3][0], true];
          else pwrState[3] = [pwrState[3][0], false];

          if (password.length > 8) pwrState[4] = [pwrState[4][0], true];
          else pwrState[4] = [pwrState[4][0], false];

          return pwrState;
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
    setAuthenticating(() => true);

    const errors = CheckFormInputs(inputs, requirements);

    if (errors.length === 0) {
      setShowError(() => []);
      try {
        const [firstName, ...lastName] = inputs.name.split(' ');
        const { status, data } = await createUser({
          firstName,
          lastName: lastName.length > 0 ? lastName : '',
          email: inputs.email,
          password: inputs.password
        });
        if (status === 201 || status === 200) {
          setShowError(() => []);
          setInputs(() => {
            return {
              name: '',
              email: '',
              password: ''
            };
          });
          console.log(data.data);
          dispatch({ type: 'USER_CREATED', payload: data.data });
          // window.location('/feed');
        }
      } catch (err) {
        const { status, data } = err.response && err.response;
        if (status && status === 302) {
          setShowError(prevState => {
            return [
              ...prevState,
              {
                errorFor: 'email',
                errorValue: data && data.data && data.data
              }
            ];
          });
        }
      }
    } else {
      setShowError(() => {
        return errors.reduce((acc, curr) => {
          const [[key, value]] = Object.entries(curr);
          if (acc.length === 0) {
            acc.push({ errorFor: key, errorValue: value });
            return acc;
          }

          const foundObject = acc.find(({ errorFor }) => errorFor === key);

          if (!foundObject) {
            acc.push({ errorFor: key, errorValue: value });
          }

          return acc;
        }, []);
      });
    }
    setAuthenticating(() => false);
  }

  return state.user.isAuthenticated ? (
    <Redirect to='/' />
  ) : (
    <Wrapper>
      <Container>
        <FormContainer>
          <OnboardingText
            fontSize='24px'
            lineHeight='32px'
            fontWeight='bold'
            color='#030F09'>
            {path === 'login' ? 'Welcome Back' : 'Start Sculpting'}
          </OnboardingText>
          <OnboardingText marginTop='10px' color='#606060'>
            {path === 'login'
              ? 'Please login to continue'
              : 'Create account  to continue'}
          </OnboardingText>
          {path !== 'login' && (
            <>
              <OnboardingText
                color={
                  showErrors.find(({ errorFor }) => errorFor === 'name') &&
                  '#ff0000'
                }>
                Full Name
              </OnboardingText>
              <FormInput
                type='text'
                value={inputs.name}
                color={
                  showErrors.find(({ errorFor }) => errorFor === 'name') &&
                  '#ff0000'
                }
                onChange={e => handleInputChange(e, 'name')}
                disabled={authenticating}
              />
              <ErrorText errors={showErrors} compareKey='name' />
            </>
          )}
          <OnboardingText
            color={
              showErrors.find(({ errorFor }) => errorFor === 'email') &&
              '#ff0000'
            }>
            Email address
          </OnboardingText>
          <FormInput
            type='email'
            value={inputs.email}
            color={
              showErrors.find(({ errorFor }) => errorFor === 'email') &&
              '#ff0000'
            }
            onChange={e => handleInputChange(e, 'email')}
            disabled={authenticating}
          />
          <ErrorText errors={showErrors} compareKey='email' />
          <OnboardingText
            color={
              showErrors.find(({ errorFor }) => errorFor === 'password') &&
              '#ff0000'
            }>
            Password
          </OnboardingText>
          <FormInput
            type='password'
            value={inputs.password}
            color={
              showErrors.find(({ errorFor }) => errorFor === 'password') &&
              '#ff0000'
            }
            onChange={e => handleInputChange(e, 'password')}
            onFocus={handleFocus}
            onBlur={handleFocus}
            disabled={authenticating}
          />
          {path !== 'login' && showPWRequirements && (
            <PasswordRequirements items={requirements} />
          )}
          <OnboardingButton onClick={handleSubmit}>
            {/* {!authenticating */}
            {/* ? */}
            {path === 'login' ? 'Login' : 'Sign Up'}
            {/* : <Spinner />} */}
          </OnboardingButton>
          <OnboardingText marginTop='24px' textAlign='center'>
            {path === 'login' ? 'New to Sculptor?' : 'Already have an account?'}
          </OnboardingText>
          <Link to={path === 'login' ? '/signup' : '/login'}>
            <OnboardingText
              marginTop='10px'
              fontWeight='bold'
              fontSize='16px'
              textAlign='center'
              color='#30BE76'>
              {path === 'login' ? 'Create Account Here' : 'Login Here'}
            </OnboardingText>
          </Link>
        </FormContainer>
      </Container>
    </Wrapper>
  );
}

export default Onboarding;

ErrorText.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  compareKey: PropTypes.string
};

ErrorText.defaultProps = {
  errors: [],
  compareKey: ''
};

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
