import React, { Component } from "react";
import { Container } from "react-bootstrap";
import RecipeList from "../components/RecipeList";
class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <RecipeList />
      </Container>
    );
  }
}

export default Recipes;
