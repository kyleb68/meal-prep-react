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
        <Form.Group controlID="formRecipeIngredientDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form.Row>
    );
  }
}

export default IngredientInput;
