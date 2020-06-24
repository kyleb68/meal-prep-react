import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const RecipeIngredients = (props) => {
  const handleDeleteClick = (index) => {
    props.setRecipeIngredients(
      props.recipeIngredients.filter(
        (item) => props.recipeIngredients.indexOf(item) !== index
      )
    );
  };

  const checkIngredients = () => {
    console.log(props.recipeIngredients);
  };

  return (
    <div>
      <h5>Ingredients:</h5>
      <button onClick={checkIngredients}>check</button>
      <ListGroup>
        {props.recipeIngredients.map((ingredient) => (
          <ListGroup.Item key={props.recipeIngredients.indexOf(ingredient)}>
            {ingredient.quantity} {ingredient.units} {ingredient.name}{" "}
            {ingredient.description}
            <Button
              variant="danger"
              onClick={handleDeleteClick(
                props.recipeIngredients.indexOf(ingredient)
              )}
            >
              TestButton
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default RecipeIngredients;
