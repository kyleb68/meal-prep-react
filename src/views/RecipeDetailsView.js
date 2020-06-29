import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import RecipeService from "../services/RecipeService";
import IngredientService from "../services/IngredientService";
import DirectionService from "../services/DirectionService";
import RecipeDetailsList from "../components/RecipeDetailListComponents/RecipeDetailsList";
import RecipeIngredientsList from "../components/RecipeDetailListComponents/RecipeIngredientsList";
import RecipeDirectionsList from "../components/RecipeDetailListComponents/RecipeDirectionsList";

const RecipeDetailsView = ({ match }) => {
  const {
    params: { recipeId },
  } = match;

  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [directions, setDirections] = useState({});
  useEffect(() => {
    const recipeService = new RecipeService();
    const ingredientService = new IngredientService();
    const directionService = new DirectionService();

    async function getRecipe() {
      setRecipe(await recipeService.getAllIncluding(recipeId));
    }

    async function getIngredients() {
      setIngredients(
        await ingredientService.getAllIncluding(`?recipeId=${recipeId}`)
      );
    }

    async function getDirections() {
      setDirections(
        await directionService.getAllIncluding(`?recipeId=${recipeId}`)
      );
    }
    getRecipe();
    getIngredients();
    getDirections();
  }, [recipeId]);

  return (
    <Container>
      <RecipeDetailsList recipeDetails={recipe} />
      {ingredients.length ? (
        <RecipeIngredientsList recipeIngredients={ingredients} />
      ) : (
        "Loading ingredients..."
      )}
      {directions.length ? (
        <RecipeDirectionsList recipeDirections={directions} />
      ) : (
        "Loading directions..."
      )}
    </Container>
  );
};

export default RecipeDetailsView;
