import React, { Component } from "react";
import IngredientInput from "../../components/IngredientInput";

class IngredientInputView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    console.log("Test");
  };

  render() {
    return <div>Text in component</div>;
  }
}

export default IngredientInputView;
