export class Adapter {
  constructor(baseUrl = "http://localhost:3000/api/v0"){
    this.baseUrl = baseUrl
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint)
           .then(response => response.json())
  }
}
