import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../../api/Recipe';
import useAPI from '../../hooks/useAPI';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopView from './Desktop';
import MobileView from './Mobile';

function RecipePreview() {
  const { id } = useParams();
  const callback = useCallback(() => getRecipe(id), [id]);
  const { data: recipeDetails, error } = useAPI(callback);
  const { isMobile } = useWindowSize();

  return isMobile ? <MobileView /> : <DesktopView />;
}

export default RecipePreview;
