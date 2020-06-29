import RestService from "../services/RestService";

export default class DirectionService extends RestService {
  #endpointUrl;

  constructor() {
    super("directions");
  }

  async createNew(data) {}
}
