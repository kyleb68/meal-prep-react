import RestService from "../services/RestService";

export default class IngredientService extends RestService {
  #endpointUrl;

  constructor() {
    super("ingredients");
  }

  async createNew(data) {}
}
