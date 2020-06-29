import React from "react";
import { Container } from "react-bootstrap";
import RecipeList from "../components/RecipeList";

const Recipes = (props) => {
  return (
    <Container>
      <RecipeList />
    </Container>
  );
};

export default Recipes;
