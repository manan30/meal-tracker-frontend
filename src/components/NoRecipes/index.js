import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as NoRecipeIcon } from '../../assets/img/no-recipes.svg';
import Text from '../Text';

const NoRecipesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    height: 128px;
    width: 128px;
  }
`;

const NoRecipesText = styled(Text)`
  margin-top: 24px;

  color: #767676;
  font-weight: normal;
  font-size: 21px;
  line-height: 22px;
  letter-spacing: 0.4px;
  text-align: center;
`;

function NoRecipes({ text }) {
  return (
    <NoRecipesContainer>
      <NoRecipeIcon />
      <NoRecipesText>{text}</NoRecipesText>
    </NoRecipesContainer>
  );
}

NoRecipes.propTypes = {
  text: PropTypes.string
};

NoRecipes.defaultProps = {
  text: ''
};

export default NoRecipes;
