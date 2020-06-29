import React, { useState, useEffect } from "react";
import RecipeService from "../services/RecipeService";
import { ListGroup } from "react-bootstrap";
import RecipeListItem from "./RecipeListitem";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipeService = new RecipeService();
    async function getRecipes() {
      setRecipes(await recipeService.getAllIncluding());
    }

    getRecipes();
  });

  return (
    <ListGroup horizontal>
      {recipes.map((item) => (
        <ListGroup.Item key={item.id}>
          <RecipeListItem
            name={item.title}
            description={item.description}
            id={item.id}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default RecipeList;
