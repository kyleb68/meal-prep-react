import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

class AddRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {
        title: "",
        description: "",
      },
    };
  }

  render() {
    const setRecipeProperties = (event) => {
      //this.state.recipe.setState({ title: event.target[0].value });
      //this.state.recipe.setState({ description: event.target[1].value });
      axios({
        method: "post",
        url: "http://localhost:3000/recipes",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          title: event.target[0].value,
          description: event.target[1].value,
        },
      })
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <Container>
        <Form onSubmit={setRecipeProperties}>
          <Form.Group controlId="formRecipeTitle">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control type="text" required={true} />
          </Form.Group>
          <Form.Group controlId="formRecipeDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" required={true} />
          </Form.Group>
          <Form.Group controlId="formRecipePrepTime">
            <Form.Label>Prep Time in Minutes</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group controlId="formRecipeCookTime">
            <Form.Label>Cook Time in Minutes</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group controlId="formRecipeServings">
            <Form.Label>Amount of Servings Made</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Button type="submit">Add Recipe</Button>
        </Form>
      </Container>
    );
  }
}

export default AddRecipes;
