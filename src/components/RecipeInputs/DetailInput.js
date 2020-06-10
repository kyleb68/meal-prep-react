import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";

const DetailInput = (props) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Recipe Name:</Form.Label>
        <Form.Control
          type="text"
          value={props.recipe.title}
          onChange={(e) =>
            props.setRecipe({ ...props.recipe, title: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          value={props.recipe.description}
          onChange={(e) =>
            props.setRecipe({ ...props.recipe, description: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prep Time (in minutes):</Form.Label>
        <Form.Control
          type="number"
          value={props.recipe.prepTime}
          defaultValue=""
          onChange={(e) =>
            props.setRecipe({ ...props.recipe, prepTime: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Cook Time (in minutes):</Form.Label>
        <Form.Control
          type="number"
          value={props.recipe.cookTime}
          defaultValue=""
          onChange={(e) =>
            props.setRecipe({ ...props.recipe, cookTime: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Serving Amount:</Form.Label>
        <Form.Control
          type="number"
          value={props.recipe.servingAmount}
          defaultValue=""
          onChange={(e) =>
            props.setRecipe({ ...props.recipe, servingAmount: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Serving Amount:</Form.Label>
        <Form.Control
          type="number"
          value={props.recipe.servingAmount}
          defaultValue=""
          onChange={(e) =>
            props.setRecipe({ ...props.recipe, servingAmount: e.target.value })
          }
        />
      </Form.Group>
    </Form>
  );
};

export default DetailInput;
