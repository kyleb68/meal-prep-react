import React from "react";
import { Link } from "react-router-dom";

const RecipeListItem = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <Link to={`/recipe-details/${props.id}`}>
          Learn how to make {props.name}!
        </Link>
      </div>
    </div>
  );
};

export default RecipeListItem;
