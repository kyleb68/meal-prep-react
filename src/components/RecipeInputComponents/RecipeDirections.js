import React from "react";
import { ListGroup } from "react-bootstrap";

const RecipeDirections = (props) => {
  let recipeDirections = props.recipeDirections;
  const listItems = recipeDirections.map((direction, id) => (
    <ListGroup.Item key={id}>{direction.text}</ListGroup.Item>
  ));

  return (
    <div>
      <h5>Directions:</h5>
      <ListGroup>{listItems}</ListGroup>
    </div>
  );
};

export default RecipeDirections;
