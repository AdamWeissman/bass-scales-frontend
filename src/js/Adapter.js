export class Adapter {
  constructor(baseUrl = "http://localhost:3000/api/v0"){
    this.baseUrl = baseUrl
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint)
           .then(response => response.json())
  }

  post(endpoint, data) {
    return fetch(this.baseUrl + endpoint, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
}
