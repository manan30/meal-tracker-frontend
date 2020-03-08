import styled from 'styled-components';
import Text from '../../components/Text';
import Button from '../../components/Button';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #11998e, #38ef7d);
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  height: 70%;
  width: 60%;
  margin: 15% 20%;

  background-color: #ffffff;
  box-shadow: 0px 6px 20px rgba(13, 51, 32, 0.1);
  border-radius: 8px;

  @media screen and (max-width: 640px) {
    height: 100%;
    width: 100%;
    margin: 0;
    background: linear-gradient(to right, #11998e, #38ef7d);
    box-shadow: none;
    border-radius: 0;
  }
`;

const FormContainer = styled.div`
  height: calc(100% - 16px);
  width: calc(50% - 40px);
  margin-left: 50%;
  padding: 0 24px 0 16px;
  overflow-y: scroll;

  @media screen and (max-width: 640px) {
    height: calc(100% - 16px);
    width: calc(100% - 32px);
    margin-left: 0;
    padding: 16px;
  }
`;

const FormInput = styled.input`
  height: 32px;
  width: 100%;
  margin-top: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.color || '#cccccc'};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.color || '#030f09'};
  transition: all 0.4s linear;

  :focus {
    border-bottom: 1px solid ${props => props.color || '#30be76'};
  }

  :hover {
    border-bottom: 1px solid ${props => props.color || '#30be76'};
  }

  @media screen and (max-width: 640px) {
    border-bottom: 1px solid #ffffff;
    color: #ffffff;

    :focus {
      border-bottom: 1px solid #ffffff;
    }

    :hover {
      border-bottom: 1px solid #ffffff;
    }
  }
`;

const OnboardingText = styled(Text)`
  margin-top: ${props => (props.marginTop ? props.marginTop : '24px')};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '22px')};
  color: ${props => (props.color ? props.color : '#A8A8A8')};
  text-align: ${props => props.textAlign && props.textAlign};

  @media screen and (max-width: 640px) {
    color: #ffffff;
  }
`;

const OnboardingButton = styled(Button)`
  margin-top: 25px;
  width: 100%;

  @media screen and (max-width: 640px) {
    border: none;

    :hover {
      background-color: #ffffff;
      color: #30be76;
    }
  }
`;

export {
  Wrapper,
  Container,
  FormContainer,
  FormInput,
  OnboardingText,
  OnboardingButton
};
