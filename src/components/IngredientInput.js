import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class IngredientInput extends Component {
  render() {
    return (
      <Form.Row>
        <Form.Group controlID="formRecipeIngredientName">
          <Form.Label>Ingredient Name</Form.Label>
          <Form.Control type="text" required={true} />
        </Form.Group>
        <Form.Group controlID="formRecipeIngredientQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" required={true} />
        </Form.Group>
        <Form.Group controlID="formRecipeIngredientMeasurement">
          <Form.Label>Units</Form.Label>
          <Form.Control as="select" defaultValue="select one">
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
        <Form.Group controlID="formRecipeIngredientDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form.Row>
    );
  }
}

export default IngredientInput;
