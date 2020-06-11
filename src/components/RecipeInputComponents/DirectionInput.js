import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const DirectionInput = (props) => {
  const [direction, setDirection] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    props.setRecipeDirections(props.recipeDirections.concat(direction));
  };

  return (
    <form onSubmit={submitHandler}>
      <Form.Row>
        <Form.Group>
          <Form.Label>Enter step:</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            onChange={(e) => setDirection(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Add Step
        </Button>
      </Form.Row>
    </form>
  );
};

export default DirectionInput;
