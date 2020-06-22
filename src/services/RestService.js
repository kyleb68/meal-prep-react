import axios from "axios";

export default class RestService {
  #endpointUrl;

  constructor(endpoint) {
    this.#endpointUrl = `localhost:3000/${endpoint}`;
  }

  async _getAllIncluding(suffix = "") {
    const response = await axios.get(`${this.#endpointUrl}/${suffix}`);
    return response.data;
  }

  async _createNew() {
    console.log("test");
  }
}
