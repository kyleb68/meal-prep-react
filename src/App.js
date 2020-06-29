import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Home from "./views/Home";
import Recipes from "./views/Recipes";
import AddRecipes from "./views/RecipeInputViews/AddRecipes";
import RecipeDetailsView from "./views/RecipeDetailsView";

class App extends Component {
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
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/recipes">
                Recipes
              </Nav.Link>
              <Nav.Link as={NavLink} to="/add-recipes">
                Add a Recipe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="content">
          <Route exact path="/home" component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/add-recipes" component={AddRecipes} />
          <Route
            path="/recipe-details/:recipeId"
            component={RecipeDetailsView}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
