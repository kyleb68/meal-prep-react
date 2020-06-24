import RestService from "./RestService";
import axios from "axios";

export default class RecipeService extends RestService {
  #endpointUrl;

  constructor() {
    super("recipes");
  }

  async createNew(data) {
    this.#endpointUrl = this.getEndpoint();
    let id;
    await axios
      .post(`${this.#endpointUrl}`, {
        title: data.title,
        description: data.description,
        prepTime: data.prepTime,
        cookTime: data.cookTime,
        servingAmount: data.servingAmount,
        ingredients: data.ingredients,
        directions: data.directions,
      })
      .then((response) => {
        console.log(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(id);
  }
}
