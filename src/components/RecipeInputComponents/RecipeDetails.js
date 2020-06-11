import React from "react";
import { ListGroup } from "react-bootstrap";

const RecipeDetaiList = (props) => {
  let recipeDetails = props.recipeDetails;
  return (
    <div>
      <h5>Details:</h5>
      <ListGroup>
        <ListGroup.Item>Recipe Name: {recipeDetails.title}</ListGroup.Item>
        <ListGroup.Item>
          Description: {recipeDetails.description}
        </ListGroup.Item>
        <ListGroup.Item>
          Prep Time: {recipeDetails.prepTime} minutes
        </ListGroup.Item>
        <ListGroup.Item>
          Cook Time: {recipeDetails.cookTime} minutes
        </ListGroup.Item>
        <ListGroup.Item>
          {recipeDetails.servingAmount} serving(s)
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RecipeDetaiList;
