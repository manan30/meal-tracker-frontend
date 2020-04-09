import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { createUser, loginUser } from '../../api/User';
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
  Snackbar,
  Wrapper,
} from './styled';

function ErrorComponent({ errors, compareKey }) {
  const index = errors.findIndex(({ errorFor }) => errorFor === compareKey);
  if (index !== -1) {
    if (compareKey !== 'all')
      return (
        <OnboardingText marginTop='10px' fontSize='10px' color='#ff0000'>
          {errors[index].errorValue}
        </OnboardingText>
      );
    console.log(`Internal error: ${errors[index].errorValue}`);
    return (
      <Snackbar>Internal server error. Please try again in some time.</Snackbar>
    );
  }
  return <></>;
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
    password: '',
  });

  function handleInputChange(e, type) {
    e.persist();
    if (type === 'name') {
      setInputs((prevState) => {
        return { ...prevState, name: e.target.value };
      });
    } else if (type === 'email') {
      setInputs((prevState) => {
        return { ...prevState, email: e.target.value };
      });
    } else {
      setInputs((prevState) => {
        const { password } = { ...prevState, password: e.target.value };

        setRequirements((oldState) => {
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
    setShowPwRequirements((prevState) => !prevState);
  }

  async function handleSubmit() {
    setAuthenticating(() => true);

    const errors = CheckFormInputs(
      path === 'login'
        ? { email: inputs.email, password: inputs.password }
        : inputs,
      requirements
    );

    if (errors.length === 0) {
      try {
        const [firstName, ...lastName] = inputs.name.split(' ');
        const lastNameSanitized = lastName.length > 0 ? lastName.join(' ') : '';
        const { status, data } =
          path === 'login'
            ? await loginUser({
                email: inputs.email,
                password: inputs.password,
              })
            : await createUser({
                firstName,
                lastName: lastNameSanitized,
                email: inputs.email,
                password: inputs.password,
              });
        if (status === 201 || status === 200) {
          setAuthenticating(() => false);
          dispatch({ type: 'USER_ONBOARD', payload: data.data });
        }
      } catch (err) {
        setAuthenticating(() => false);

        if (err.message === 'Network Error') {
          setShowError(() => {
            return [
              {
                errorFor: 'all',
                errorValue: 'API not available',
              },
            ];
          });
          return;
        }

        const { status, data } = err.response && err.response;

        if (status && status === 400) {
          setShowError(() => {
            return [
              {
                errorFor: 'email',
                errorValue: data && data.data && data.data,
              },
            ];
          });
          return;
        }

        // Generic status error
        // if (status && status === 500) {
        setShowError(() => {
          return [
            {
              errorFor: 'all',
              errorValue: data && data.data && data.data,
            },
          ];
        });
        // }
      }
    } else {
      setAuthenticating(() => false);
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
                onChange={(e) => handleInputChange(e, 'name')}
                disabled={authenticating}
              />
              <ErrorComponent errors={showErrors} compareKey='name' />
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
            onChange={(e) => handleInputChange(e, 'email')}
            disabled={authenticating}
          />
          <ErrorComponent errors={showErrors} compareKey='email' />
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
            onChange={(e) => handleInputChange(e, 'password')}
            onFocus={handleFocus}
            onBlur={handleFocus}
            disabled={authenticating}
          />
          <ErrorComponent errors={showErrors} compareKey='password' />
          {path !== 'login' && showPWRequirements && (
            <PasswordRequirements items={requirements} />
          )}
          <OnboardingButton onMouseDown={handleSubmit} onClick={handleSubmit}>
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
      <ErrorComponent errors={showErrors} compareKey='all' />
    </Wrapper>
  );
}

export default Onboarding;

ErrorComponent.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      errorFor: PropTypes.string,
      errorValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
    })
  ),
  compareKey: PropTypes.string,
};

ErrorComponent.defaultProps = {
  errors: [],
  compareKey: '',
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
