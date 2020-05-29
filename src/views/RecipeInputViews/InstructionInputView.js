import React, { Component } from "react";

export default class InstructionInputView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      prepTime: 0,
      cookTime: 0,
      servingAmount: 0,
      ingredients: [{ name: "", quantity: 0, unit: "", description: "" }],
      instructions: [],
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
      ingredients: recipe.ingredients,
    });
  };

  render() {
    return <div> textInComponent </div>;
  }
}
