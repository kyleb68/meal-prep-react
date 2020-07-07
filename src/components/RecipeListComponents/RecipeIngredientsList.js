import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

const RecipeIngredientsList = (props) => {
  const [ingredients] = useState(props.recipeIngredients);

  const listItems = ingredients.map((ingredient) => (
    <ListGroup.Item key={props.recipeIngredients.indexOf(ingredient)}>
      {ingredient.quantity} {ingredient.unit} {ingredient.name}{" "}
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

export default RecipeIngredientsList;
