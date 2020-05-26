import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import IngredientInput from "../components/IngredientInput";
import axios from "axios";

class AddRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {
        title: "",
        description: "",
        prepTime: 0,
        cookTime: 0,
        servingAmount: 0,
      },
      ingredients: [],
    };
  }
  setRecipeProperties = (event) => {
    axios({
      method: "post",
      url: "http://localhost:3000/recipes",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        /* title: event.target[0].value,
        description: event.target[1].value,
        prepTime: event.target[2].value,
        cookTime: event.target[3].value,
        servingAmount: event.target[4].value, */
        recipe: event.target,
      },
    })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addIngredient = (event) => {
    this.setState((prevState) => ({
      ingredients: [
        ...prevState.ingredients,
        { name: "", quantity: 0, unit: "", description: "" },
      ],
    }));
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.setRecipeProperties}>
          <Button type="submit">Submit Recipe</Button>
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
          <Button onClick={this.addIngredient}>Add Another Ingredient</Button>
          <IngredientInput ingredients={this.state.ingredients} />
        </Form>
      </Container>
    );
  }
}

export default AddRecipes;
