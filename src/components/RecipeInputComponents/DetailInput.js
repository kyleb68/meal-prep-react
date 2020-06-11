import React from "react";
import { Form } from "react-bootstrap";

const DetailInput = (props) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Recipe Name:</Form.Label>
        <Form.Control
          type="text"
          value={props.recipeDetails.title}
          onChange={(e) =>
            props.setRecipeDetails({
              ...props.recipeDetails,
              title: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          value={props.recipeDetails.description}
          onChange={(e) =>
            props.setRecipeDetails({
              ...props.recipeDetails,
              description: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prep Time (in minutes):</Form.Label>
        <Form.Control
          type="number"
          value={props.recipeDetails.prepTime}
          onChange={(e) =>
            props.setRecipeDetails({
              ...props.recipeDetails,
              prepTime: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Cook Time (in minutes):</Form.Label>
        <Form.Control
          type="number"
          value={props.recipeDetails.cookTime}
          onChange={(e) =>
            props.setRecipeDetails({
              ...props.recipeDetails,
              cookTime: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Serving Amount:</Form.Label>
        <Form.Control
          type="number"
          value={props.recipeDetails.servingAmount}
          onChange={(e) =>
            props.setRecipe({
              ...props.recipeDetails,
              servingAmount: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Serving Amount:</Form.Label>
        <Form.Control
          type="number"
          value={props.recipeDetails.servingAmount}
          onChange={(e) =>
            props.setRecipeDetails({
              ...props.recipeDetails,
              servingAmount: e.target.value,
            })
          }
        />
      </Form.Group>
    </Form>
  );
};

export default DetailInput;
