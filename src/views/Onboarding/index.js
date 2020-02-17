import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { Container, FormInput, FormContainer, Wrapper } from './styled';
import { createUser } from '../../api/User';
import Spinner from '../../components/Spinner/styled';
import CheckFormInputs from '../../utils/CheckFormInputs';

function Onboarding() {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  // const [authenticating, setAuthenticating] = useState(false);

  // const nameRef = useRef();
  // const emailRef = useRef();

  // useEffect(() => {
  //   if (path === 'login') {
  //     emailRef.current && emailRef.current.focus();
  //   } else {
  //     nameRef.current && nameRef.current.focus();
  //   }
  // });

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
        return { ...prevState, password: e.target.value };
      });
    }
  }

  async function handleSubmit() {
    // setAuthenticating(prevState => !prevState);
    const [firstName, ...lastName] = inputs.name.split(' ');

    const errors = CheckFormInputs(inputs);
    // const response = await createUser({
    //   firstName,
    //   lastName: lastName.length > 0 ? lastName : '',
    //   email: inputs.email,
    //   password: inputs.password
    // });
    // console.log(response.status);
  }

  return (
    <Wrapper>
      <Container>
        <FormContainer>
          <Text
            margin-top='48px'
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
                margin-top='60px'
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
            type='password'
            margin-top='10px'
            value={inputs.password}
            onChange={e => handleInputChange(e, 'password')}
          />
          <Button
            margin='40px 0 0 0'
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
