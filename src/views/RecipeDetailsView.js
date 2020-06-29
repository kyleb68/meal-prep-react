import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import RecipeService from "../services/RecipeService";
import RecipeDetailsList from "../components/RecipeDetailListComponents/RecipeDetailsList";
import RecipeIngredientsList from "../components/RecipeDetailListComponents/RecipeIngredientsList";
import RecipeDirectionsList from "../components/RecipeDetailListComponents/RecipeDirectionsList";

const RecipeDetailsView = ({ match }) => {
  const {
    params: { recipeId },
  } = match;

  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    const recipeService = new RecipeService();

    async function getRecipe() {
      setRecipe(await recipeService.getAllIncluding(recipeId));
    }
    getRecipe();
  }, [recipeId]);

  const isEmpty = (object) => {
    for (var key in object) {
      if (object.hasOwnProperty(key)) return false;
    }
    return true;
  };

  return (
    <Container>
      {!isEmpty(recipe) ? (
        <Container>
          <RecipeDetailsList recipeDetails={recipe} />
          <RecipeIngredientsList recipeIngredients={recipe.ingredients} />
          <RecipeDirectionsList recipeDirections={recipe.directions} />
        </Container>
      ) : (
        "Loading recipe..."
      )}
    </Container>
  );
};

export default RecipeDetailsView;
