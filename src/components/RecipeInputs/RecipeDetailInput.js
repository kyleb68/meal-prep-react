import React, { useState } from "react";
import { Form } from "react-bootstrap";

const RecipeDetailInput = (props) => {
  let recipeDetails = props.details;
  return (
    <Form>
      <Form.Group>
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control
          id="title"
          type="text"
          value={recipeDetails.title}
          className="name"
          required={true}
        />
      </Form.Group>
    </Form>
  );
};

export default RecipeDetailInput;
