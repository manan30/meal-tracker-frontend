import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../../api/Recipe';
import Button from '../../components/Button';
import CardContainer from '../../components/Card/styled';
import Text from '../../components/Text';
import useAPI from '../../hooks/useAPI';
import {
  Content,
  Image,
  ImagesContainer,
  MainSection,
  SideSection,
  Wrapper,
} from './styled';
import useWindowSize from '../../hooks/useWindowSize';
import MobileView from './Mobile';

function RecipePreview() {
  const { id } = useParams();
  const callback = useCallback(() => getRecipe(id), [id]);
  const { data: recipeDetails, error } = useAPI(callback);
  const { isMobile } = useWindowSize();

  return isMobile ? <MobileView /> : <></>;
}

export default RecipePreview;
