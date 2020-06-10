import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import RecipeDetailList from "../../components/RecipeDetailList/RecipeDetails";
import DetailInput from "../../components/RecipeInputs/DetailInput";

const AddRecipes = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    prepTime: 0,
    cookTime: 0,
    servingAmount: 0,
    ingredients: ["test", "test2", "test3"],
  });
  return (
    <Container>
      <Row>
        <Col>
          <h2>Recipe Input:</h2>
          <DetailInput recipe={recipe} setRecipe={setRecipe} />
          <Form></Form>
        </Col>
        <Col>
          <h2>Recipe:</h2>
          <RecipeDetailList recipe={recipe} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddRecipes;
