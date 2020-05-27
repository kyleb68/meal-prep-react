import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Home from "./Home";
import Recipes from "./Recipes";
import AddRecipes from "./RecipeInputViews/AddRecipes";
import IngredientInputView from "./RecipeInputViews/IngredientInputView";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Navbar.Brand as={NavLink} to="/">
            React Demo App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/Home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Recipes">
                Recipes
              </Nav.Link>
              <Nav.Link as={NavLink} to="/AddRecipes">
                Add a Recipe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="content">
          <Route exact path="/Home" component={Home} />
          <Route path="/Recipes" component={Recipes} />
          <Route path="/AddRecipes" component={AddRecipes} />
          <Route path="/ingredient-input" component={IngredientInputView} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
