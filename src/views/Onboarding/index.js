import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { Container, FormInput, FormContainer, Wrapper } from './styled';

function Onboarding() {
  const { pathname } = useLocation();
  const path = pathname.slice(1);

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
              <FormInput type='text' margin-top='10px' />
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
          <FormInput type='email' margin-top='10px' />
          <Text
            margin-top='30px'
            font-style='normal'
            font-weight='normal'
            font-size='14px'
            line-height='22px'
            color='#A8A8A8'>
            Password
          </Text>
          <FormInput type='password' margin-top='10px' />
          <Button
            text={path === 'login' ? 'Login' : 'Sign Up'}
            margin='40px 0 0 0'
            width='calc(100% - 26px)'
          />
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
        </FormContainer>
      </Container>
    </Wrapper>
  );
}

export default Onboarding;
