import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import RecipeListItem from "./RecipeListitem";
import RecipeService from "../services/RecipeService";

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  async componentDidMount() {
    const recipeService = new RecipeService();
    this.setState({ recipes: await recipeService.getAllIncluding() });
  }

  render() {
    return (
      <ListGroup horizontal>
        {this.state.recipes.map((item) => (
          <ListGroup.Item key={item.id}>
            <RecipeListItem name={item.title} description={item.description} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default RecipeList;
