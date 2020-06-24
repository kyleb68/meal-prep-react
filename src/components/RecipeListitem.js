import React from "react";

const RecipeListItem = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href="/#" className="card-link">
          Learn how to make {props.name}!
        </a>
      </div>
    </div>
  );
};

export default RecipeListItem;
