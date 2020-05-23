import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import RecipeListItem from "./RecipeListitem";
import axios from "axios";

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:3000/recipes",
    })
      .then((resp) => {
        this.setState({
          recipes: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <ListGroup horizontal>
        {this.state.recipes.map((item) => (
          <ListGroup.Item>
            <RecipeListItem name={item.title} description={item.description} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default RecipeList;
