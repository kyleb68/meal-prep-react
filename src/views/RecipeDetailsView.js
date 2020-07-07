import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import RecipeService from "../services/RecipeService";
import RecipeDetailsList from "../components/RecipeListComponents/RecipeDetailsList";
import RecipeIngredientsList from "../components/RecipeListComponents/RecipeIngredientsList";
import RecipeDirectionsList from "../components/RecipeListComponents/RecipeDirectionsList";

const RecipeDetailsView = ({ match }) => {
  const {
    params: { recipeId },
  } = match;

  const [recipe, setRecipe] = useState({});

  const fetchRecipe = async () => {
    const recipeService = new RecipeService();
    setRecipe(await recipeService.getAllIncluding(recipeId));
  };
  useEffect(() => {
    fetchRecipe(recipeId);
  }, [recipeId]);

  //checks recipe for conditional rendering
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
