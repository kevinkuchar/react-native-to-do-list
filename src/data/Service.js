import axios from 'axios';

class Service {
  constructor(opts) {
    this.url = opts.url;
    this.actions = opts.actions || {};
    this.axios = axios.create({
      baseURL: 'http://192.168.1.76/to-do-api/public/api/',
      timeout: 5000
    });
  }

  get(params) {
    return this.axios.get(this.url, params)
      .then(this._onSuccessThunk({ method: 'GET' }))
      .catch(this._onErrorThunk);
  }

  post(params) {
    return this.axios.post(this.url, params)
      .then(this._onSuccessThunk({ method: 'POST' }))
      .catch(this._onErrorThunk);
  }

  /**
   * Invoked upon a successful request.
   * If an action is passed into the constructor with request method name
   * we pass the response data into the action.
   */
  _onSuccessThunk = (config) => {
    return (response) => {
      if (this.actions[config.method]) {
        this.actions[config.method](response.data);
      }

      return response;
    };
  }

  _onErrorThunk = (response) => {
    console.log(response);
  }
}

export default Service;
