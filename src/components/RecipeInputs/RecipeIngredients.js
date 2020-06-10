import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

const RecipeIngredients = (props) => {
  let recipeIngredients = props.recipeIngredients;
  return (
    <div>
      <h5>Ingredients:</h5>
      <ListGroup></ListGroup>
    </div>
  );
};

export default RecipeIngredients;
