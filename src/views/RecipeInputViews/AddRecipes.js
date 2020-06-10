import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import RecipeDetailList from "../../components/RecipeInputs/RecipeDetails";
import DetailInput from "../../components/RecipeInputs/DetailInput";
import IngredientInput from "../../components/RecipeInputs/IngredientInput";
import RecipeIngredients from "../../components/RecipeInputs/RecipeIngredients";

const AddRecipes = () => {
  const [recipeDetails, setRecipeDetails] = useState({
    title: "",
    description: "",
    prepTime: 0,
    cookTime: 0,
    servingAmount: 0,
  });
  const [recipeIngredients, setRecipeIngredients] = useState([
    {
      name: "",
      quantity: 0,
      units: "",
      description: "",
    },
  ]);
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
        </Col>
        <Col>
          <h2>Recipe:</h2>
          <RecipeDetailList recipeDetails={recipeDetails} />
          <RecipeIngredients recipeIngredients={recipeIngredients} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddRecipes;
