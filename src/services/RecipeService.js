import RestService from "./RestService";

export default class RecipeService extends RestService {
  constructor() {
    super("recipes");
  }
}
