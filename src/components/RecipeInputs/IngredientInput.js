import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const IngredientInput = (props) => {
  const [ingredient, setIngredient] = useState({
    name: "",
    quantity: 0,
    units: "",
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    props.setRecipeIngredients(props.recipeIngredients.concat(ingredient));
  };

  return (
    <form onSubmit={submitHandler}>
      <Form.Row>
        <Form.Group>
          <Form.Label>Ingredient Name:</Form.Label>
          <Form.Control
            type="text"
            value={ingredient.name}
            required={true}
            onChange={(e) =>
              setIngredient({
                ...ingredient,
                name: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantiy:</Form.Label>
          <Form.Control
            type="number"
            value={ingredient.quantity}
            required={true}
            onChange={(e) =>
              setIngredient({ ...ingredient, quantity: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Units:</Form.Label>
          <Form.Control
            type="text"
            value={props.recipeIngredients.unit}
            as="select"
            required={true}
            onChange={(e) =>
              setIngredient({ ...ingredient, units: e.target.value })
            }
          >
            <option>tsp.</option>
            <option>tbsp.</option>
            <option>fluid ounce</option>
            <option>cup</option>
            <option>pint</option>
            <option>quart</option>
            <option>gallon</option>
            <option>ml</option>
            <option>liter</option>
            <option>pound(s)</option>
            <option>ounce</option>
            <option>mg</option>
            <option>g</option>
            <option>kg</option>
            <option>mm</option>
            <option>cm</option>
            <option>m</option>
            <option>inch</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            value={props.recipeIngredients.description}
            onChange={(e) =>
              setIngredient({ ...ingredient, description: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Add Ingredient
        </Button>
      </Form.Row>
    </form>
  );
};

export default IngredientInput;
