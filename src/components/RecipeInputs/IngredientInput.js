import React from "react";
import { Form } from "react-bootstrap";

const IngredientInput = (props) => {
  return props.ingredients.map((value, index) => {
    let ingredientNameId = `ingredient-name-${index}`,
      ingredientQuantityId = `ingredient-quantity-${index}`,
      ingredientUnitId = `ingredient-units-${index}`,
      ingredientDescId = `ingredient-description-${index}`;
    return (
      <Form.Row key={index}>
        <Form.Group>
          <Form.Label>Ingredient Name</Form.Label>
          <Form.Control
            name={ingredientNameId}
            data-id={index}
            id="name"
            type="text"
            value={props.ingredients[index].name}
            className="name"
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            name={ingredientQuantityId}
            data-id={index}
            id="quantity"
            type="number"
            value={props.ingredients[index].quantity}
            className="quantity"
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Units</Form.Label>
          <Form.Control
            name={ingredientUnitId}
            data-id={index}
            id="unit"
            type="text"
            value={props.ingredients[index].unit}
            className="unit"
            as="select"
            required={true}
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
          <Form.Label>Description</Form.Label>
          <Form.Control
            name={ingredientDescId}
            data-id={index}
            id="description"
            type="text"
            value={props.ingredients[index].description}
            className="description"
          />
        </Form.Group>
      </Form.Row>
    );
  });
};

export default IngredientInput;
