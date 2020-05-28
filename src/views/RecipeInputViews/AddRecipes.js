import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class AddRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      prepTime: 0,
      cookTime: 0,
      servingAmount: 0,
      ingredients: [],
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCookChange = this.handleCookChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePrepChange = this.handlePrepChange.bind(this);
    this.handleServingChange = this.handleServingChange.bind(this);
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handlePrepChange = (event) => {
    this.setState({ prepTime: event.target.value });
  };

  handleCookChange = (event) => {
    this.setState({ cookTime: event.target.value });
  };

  handleServingChange = (event) => {
    this.setState({ servingAmount: event.target.value });
  };

  addIngredientInput = () => {
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
        <Form>
          <Form.Group controlId="formRecipeTitle">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control
              type="text"
              required={true}
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </Form.Group>
          <Form.Group controlId="formRecipeDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              required={true}
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </Form.Group>
          <Form.Group controlId="formRecipePrepTime">
            <Form.Label>Prep Time in Minutes</Form.Label>
            <Form.Control
              type="number"
              value={this.state.prepTime}
              onChange={this.handlePrepChange}
            />
          </Form.Group>
          <Form.Group controlId="formRecipeCookTime">
            <Form.Label>Cook Time in Minutes</Form.Label>
            <Form.Control
              type="number"
              value={this.state.cookTime}
              onChange={this.handleCookChange}
            />
          </Form.Group>
          <Form.Group controlId="formRecipeServings">
            <Form.Label>Amount of Servings Made</Form.Label>
            <Form.Control
              type="number"
              value={this.state.servingAmount}
              onChange={this.handleServingChange}
            />
          </Form.Group>
          <Link
            to={{
              pathname: "/ingredient-input",
              state: { recipe: this.state },
            }}
          >
            <Button>Next Step: Ingredients</Button>
          </Link>
        </Form>
      </Container>
    );
  }
}

export default AddRecipes;
