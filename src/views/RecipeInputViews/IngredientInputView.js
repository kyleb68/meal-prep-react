import React, { Component } from "react";
import { ListGroup, Container, Button, Form } from "react-bootstrap";
import IngredientInput from "../../components/RecipeInputs/IngredientInput";
import { Link } from "react-router-dom";

class IngredientInputView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      prepTime: 0,
      cookTime: 0,
      servingAmount: 0,
      ingredients: [{ name: "", quantity: 0, unit: "", description: "" }],
    };
  }

  componentDidMount = () => {
    const recipe = this.props.location.state.recipe;
    this.setState({
      title: recipe.title,
      description: recipe.description,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      servingAmount: recipe.servingAmount,
    });
  };

  handleChange = (event) => {
    let ingredients = this.state.ingredients;
    let ingredient = ingredients[event.target.dataset.id];
    let key = event.target.id;
    ingredient[key] = event.target.value;
    this.setState({ ingredients: ingredients });
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
        <ListGroup>
          <ListGroup.Item>Recipe Name: {this.state.title}</ListGroup.Item>
          <ListGroup.Item>Description: {this.state.description}</ListGroup.Item>
          <ListGroup.Item>
            Prep Time: {this.state.prepTime} minutes
          </ListGroup.Item>
          <ListGroup.Item>
            Cook Time: {this.state.cookTime} minutes
          </ListGroup.Item>
          <ListGroup.Item>
            Serving Amount: {this.state.servingAmount} servings
          </ListGroup.Item>
        </ListGroup>
        <Form onChange={this.handleChange}>
          <IngredientInput ingredients={this.state.ingredients} />
          <Button onClick={this.addIngredientInput}>Add Ingredient</Button>
          <Link
            to={{
              pathname: "/instruction-input",
              state: { recipe: this.state },
            }}
          >
            <Button>Next Step: Instructions</Button>
          </Link>
        </Form>
      </Container>
    );
  }
}

export default IngredientInputView;
