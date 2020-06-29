import RestService from "../services/RestService";
import axios from "axios";

export default class IngredientService extends RestService {
  #endpointUrl;

  constructor() {
    super("ingredients");
  }

  async createNew(data) {}
}
