import axios from "axios";

export default class RestService {
  #endpointUrl;

  constructor(endpoint) {
    this.#endpointUrl = `http://localhost:3000/${endpoint}`;
  }

  getEndpoint = () => {
    return this.#endpointUrl;
  };

  async getAllIncluding(suffix = "") {
    const response = await axios.get(`${this.#endpointUrl}/${suffix}`);
    return response.data;
  }
}
