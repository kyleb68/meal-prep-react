import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const RecipeDetaiList = (props) => {
  let recipe = props.recipe;
  return (
    <ListGroup>
      <ListGroup.Item>Recipe Name: {recipe.title}</ListGroup.Item>
      <ListGroup.Item>Description: {recipe.description}</ListGroup.Item>
      <ListGroup.Item>Prep Time: {recipe.prepTime}</ListGroup.Item>
      <ListGroup.Item>Cook Time: {recipe.cookTime}</ListGroup.Item>
      <ListGroup.Item>Serving Amount: {recipe.servingAmount}</ListGroup.Item>
    </ListGroup>
  );
};

export default RecipeDetaiList;
