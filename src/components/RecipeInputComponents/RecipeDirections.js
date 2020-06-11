import React from "react";
import { ListGroup } from "react-bootstrap";

const RecipeDirections = (props) => {
  let recipeDirections = props.recipeDirections;
  const listItems = recipeDirections.map((direction) => (
    <ListGroup.Item>{direction}</ListGroup.Item>
  ));

  return (
    <div>
      <h5>Directions:</h5>
      <ListGroup>{listItems}</ListGroup>
    </div>
  );
};

export default RecipeDirections;
