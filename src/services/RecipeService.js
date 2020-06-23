import RestService from "./RestService";
import axios from "axios";

export default class RecipeService extends RestService {
  #endpointUrl;

  constructor() {
    super("recipes");
  }

  createNew(data) {
    this.#endpointUrl = this.getEndpoint();
    console.log(this.#endpointUrl);
    axios({
      method: "POST",
      url: `${this.#endpointUrl}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        title: data.title,
        description: data.description,
        prepTime: data.prepTime,
        cookTime: data.cookTime,
        servingAmount: data.servingAmount,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}
