import styled from 'styled-components';
import Button from '../Button';
import Card from '../Card';
import Text from '../Text';

const ScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  /* padding: 0 20%; */

  background: rgba(40, 41, 40, 0.5);
  mix-blend-mode: normal;
`;

const Container = styled.div`
  height: calc(100% - 100px);
  width: 50%;
  margin: 25px 0;
  padding: 25px;

  background-color: #ffffff;
  box-shadow: 0px 0px 5px rgba(13, 51, 32, 0.1);
  border-radius: 8px;

  overflow: hidden;
`;

const ItemContainer = styled.div`
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: ${(props) => props.marginBottom || '25px'};
`;

const BorderedBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent && props.justifyContent};

  height: ${(props) => props.height || '50px'};
  width: ${(props) => props.width || '100%'};
  margin-top: ${(props) => props.marginTop || '24px'};

  border: 1px dashed #979797;
  box-sizing: border-box;
  border-radius: 8px;
`;

const CreateRecipeText = styled(Text)`
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-left: ${(props) => props.marginLeft && props.marginLeft};

  font-size: ${(props) => props.fontSize || '14px'};
  line-height: 22px;
  font-weight: normal;

  color: ${(props) => props.color && props.color};
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: ${(props) => props.marginLeft || 'auto'};

  color: #363837;

  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;

    opacity: 0.5;
  }
`;

const FormInput = styled.input`
  width: 100%;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #cccccc;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #030f09;

  opacity: ${(props) => props.opacity || '0.5'};
`;

const CreateRecipeCard = styled(Card)`
  width: calc(100% - 40px);
  padding: 15px;
  margin: 0 5px 20px 5px;

  background: rgba(0, 0, 0, 0.0001);
  box-shadow: 0px 0px 5px rgba(13, 51, 32, 0.1);
  border-radius: 8px;

  :first-child {
    margin-top: 5px;
  }
`;

const CreateRecipeCardTitle = styled.div`
  display: flex;
  align-items: center;
`;

const ScrollContainer = styled.div`
  height: calc(100% - 250px);
  margin-bottom: 30px;

  overflow-y: auto;
`;

const CreateRecipeCardButton = styled(Button)`
  background: #30be76;
`;

export {
  Container,
  ItemContainer,
  BorderedBox,
  Icon,
  CreateRecipeText,
  FormInput,
  CreateRecipeCard,
  CreateRecipeCardTitle,
  ScreenWrapper,
  ScrollContainer,
  CreateRecipeCardButton,
};
