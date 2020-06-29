import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

const RecipeDetaiList = (props) => {
  const [details] = useState(props.recipeDetails);

  return (
    <div>
      <h5>Details:</h5>
      <ListGroup>
        <ListGroup.Item>Recipe Name: {details.title}</ListGroup.Item>
        <ListGroup.Item>Description: {details.description}</ListGroup.Item>
        <ListGroup.Item>Prep Time: {details.prepTime} minutes</ListGroup.Item>
        <ListGroup.Item>Cook Time: {details.cookTime} minutes</ListGroup.Item>
        <ListGroup.Item>{details.servingAmount} serving(s)</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RecipeDetaiList;
