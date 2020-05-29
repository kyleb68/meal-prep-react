import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import RecipeDetailList from "../../components/RecipeDetailList/RecipeDetails";

const AddRecipes = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    prepTime: 0,
    cookTime: 0,
    servingAmount: 0,
  });
  return (
    <Container>
      <Row>
        <Col>
          <h2>Recipe Input:</h2>
          <Form>
            <Form.Group>
              <Form.Label>Recipe Name:</Form.Label>
              <Form.Control
                type="text"
                value={recipe.title}
                onChange={(e) =>
                  setRecipe({ ...recipe, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                value={recipe.description}
                onChange={(e) =>
                  setRecipe({ ...recipe, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Prep Time (in minutes):</Form.Label>
              <Form.Control
                type="number"
                value={recipe.prepTime}
                onChange={(e) =>
                  setRecipe({ ...recipe, prepTime: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cook Time (in minutes):</Form.Label>
              <Form.Control
                type="number"
                value={recipe.cookTime}
                onChange={(e) =>
                  setRecipe({ ...recipe, cookTime: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Serving Amount:</Form.Label>
              <Form.Control
                type="number"
                value={recipe.servingAmount}
                onChange={(e) =>
                  setRecipe({ ...recipe, servingAmount: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <h2>Recipe:</h2>
          <RecipeDetailList recipe={recipe} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddRecipes;
