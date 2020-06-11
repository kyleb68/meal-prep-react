import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const DirectionInput = (props) => {
  const [index, setIndex] = useState(props.recipeDirections.length);
  const [direction, setDirection] = useState({ id: null, text: "" });

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    setIndex(index + 1);
    setDirection({ ...direction, id: index });
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
            onChange={(e) =>
              setDirection({ ...direction, text: e.target.value })
            }
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
