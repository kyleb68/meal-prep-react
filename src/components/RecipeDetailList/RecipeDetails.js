import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const RecipeDetaiList = (props) => {
  let recipe = props.recipe;
  return (
    <div>
      <h5>Details:</h5>
      <ListGroup>
        <ListGroup.Item>Recipe Name: {recipe.title}</ListGroup.Item>
        <ListGroup.Item>Description: {recipe.description}</ListGroup.Item>
        <ListGroup.Item>Prep Time: {recipe.prepTime} minutes</ListGroup.Item>
        <ListGroup.Item>Cook Time: {recipe.cookTime} minutes</ListGroup.Item>
        <ListGroup.Item>{recipe.servingAmount} serving(s)</ListGroup.Item>
      </ListGroup>
      <h5>Ingredients:</h5>
      <ListGroup>
        {recipe.ingredients.map((ingredient, index) => (
          <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default RecipeDetaiList;
