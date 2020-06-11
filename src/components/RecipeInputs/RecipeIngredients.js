import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

const RecipeIngredients = (props) => {
  let recipeIngredients = props.recipeIngredients;
  console.log(recipeIngredients);
  const listItems = recipeIngredients.map((ingredient) => (
    <ListGroup.Item>
      {ingredient.quantity} {ingredient.units} {ingredient.name}{" "}
      {ingredient.description}
    </ListGroup.Item>
  ));

  return (
    <div>
      <h5>Ingredients:</h5>
      <ListGroup>{listItems}</ListGroup>
    </div>
  );
};

export default RecipeIngredients;
