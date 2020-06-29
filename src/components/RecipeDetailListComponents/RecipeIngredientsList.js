import React, { useEffect, useState } from "react";
import { ListGroup, Button } from "react-bootstrap";

const RecipeIngredientsList = (props) => {
  const [ingredients, setIngredients] = useState(props.recipeIngredients);

  return (
    <div>
      <h5>Ingredients:</h5>
      <ListGroup>
        {ingredients.map((ingredient) => (
          <ListGroup.Item key={props.recipeIngredients.indexOf(ingredient)}>
            {ingredient.quantity} {ingredient.unit} {ingredient.name}{" "}
            {ingredient.description}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default RecipeIngredientsList;
