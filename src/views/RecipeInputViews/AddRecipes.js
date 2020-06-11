import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import RecipeDetailList from "../../components/RecipeInputComponents/RecipeDetails";
import DetailInput from "../../components/RecipeInputComponents/DetailInput";
import IngredientInput from "../../components/RecipeInputComponents/IngredientInput";
import RecipeIngredients from "../../components/RecipeInputComponents/RecipeIngredients";
import DirectionInput from "../../components/RecipeInputComponents/DirectionInput";
import RecipeDirections from "../../components/RecipeInputComponents/RecipeDirections";

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
  return (
    <Container>
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
          <RecipeIngredients recipeIngredients={recipeIngredients} />
          <RecipeDirections recipeDirections={recipeDirections} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddRecipes;
