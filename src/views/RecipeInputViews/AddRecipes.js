import React, { useState } from "react";
import { Container, Col, Row, ListGroup, Button, Alert } from "react-bootstrap";
import RecipeDetailList from "../../components/RecipeInputComponents/RecipeDetails";
import DetailInput from "../../components/RecipeInputComponents/DetailInput";
import IngredientInput from "../../components/RecipeInputComponents/IngredientInput";
import DirectionInput from "../../components/RecipeInputComponents/DirectionInput";
import RecipeService from "../../services/RecipeService";

const AddRecipes = () => {
  const [recipeDetails, setRecipeDetails] = useState({
    title: "",
    description: "",
    prepTime: 0,
    cookTime: 0,
    servingAmount: 0,
  });
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeDirections, setRecipeDirections] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const recipeService = new RecipeService();

  const createRecipe = () => {
    const recipe = {
      title: recipeDetails.title,
      description: recipeDetails.description,
      prepTime: recipeDetails.prepTime,
      cookTime: recipeDetails.cookTime,
      servingAmount: recipeDetails.servingAmount,
      ingredients: recipeIngredients,
      directions: recipeDirections,
    };
    setIsSuccess(true);
    recipeService.createNew(recipe);
  };

  return (
    <Container>
      <div className="d-flex justify-content-center">
        {isSuccess && (
          <Alert className=".center" variant="success">
            Recipe Added.
          </Alert>
        )}
      </div>
      <Row>
        <Col>
          <h2>Recipe Input:</h2>
          <DetailInput
            recipeDetails={recipeDetails}
            setRecipeDetails={setRecipeDetails}
          />
          <IngredientInput
            recipeIngredients={recipeIngredients}
            setRecipeIngredients={setRecipeIngredients}
          />
          <DirectionInput
            recipeDirections={recipeDirections}
            setRecipeDirections={setRecipeDirections}
          />
        </Col>
        <Col>
          <h2>Recipe:</h2>
          <RecipeDetailList recipeDetails={recipeDetails} />
          <h5>Ingredients:</h5>
          <ListGroup>
            {recipeIngredients.map((ingredient) => (
              <ListGroup.Item key={recipeIngredients.indexOf(ingredient)}>
                {ingredient.quantity} {ingredient.units} {ingredient.name}{" "}
                {ingredient.description}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h5>Directions:</h5>
          <ListGroup>
            {recipeDirections.map((directions) => (
              <ListGroup.Item key={recipeDirections.indexOf(directions)}>
                {recipeDirections.indexOf(directions) + 1}. {directions.text}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <Button onClick={createRecipe}>Submit</Button>
      </div>
    </Container>
  );
};

export default AddRecipes;
