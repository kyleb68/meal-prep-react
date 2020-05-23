import React, { Component } from "react";

class RecipeListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href="/#" className="card-link">
            Learn how to make {this.props.name}!
          </a>
        </div>
      </div>
    );
  }
}

export default RecipeListItem;
