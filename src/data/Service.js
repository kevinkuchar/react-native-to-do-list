const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

/**
 * Transforms an object into a query string.
 */
const getQueryString = params => Object.keys(params)
  .map(key => `${key}=${encodeURIComponent(params[key])}`)
  .join('&');

/**
 * Combines a url and query parameters to a new url.
*/
const createUrlWithParams = (url, params) => `${url}?${getQueryString(params)}`;

class Service {
  constructor(opts) {
    this.url = opts.url;
    this.actions = opts.actions || {};
  }

  /**
   * Returns a Promise using the Fetch API
   * This method is used to create get() and post()
   * methods on this class.
   */
  _request = (params, opts) => {
    const isGetOrDelete = ['GET', 'DELETE'].includes(opts.method);
    const config = {
      method: opts.method,
      headers: opts.headers || defaultHeaders,
      body: !isGetOrDelete ? JSON.stringify(params) : null
    };

    if (isGetOrDelete) {
      this.url = createUrlWithParams(this.url, params);
    }

    return fetch(this.url, config)
      .then(response => response.json())
      .then(this._onSuccessThunk(config))
      .catch();
  }

  /**
   * Invoked upon a successful fetch.
   * If an action is passed into the constructor with the correct
   * method name, call it with the response data.
   */
  _onSuccessThunk = (config) => {
    return (response) => {
      if (!response.ok) {
        return { error: 'error' };
      }

      if (this.actions[config.method]) {
        this.actions[config.method](response);
      }

      return response;
    };
  }

  /**
   * Performs a GET operation
   */
  get = (params = {}, opts = {}) => {
    return this._request(params, {
      method: 'GET',
      ...opts
    });
  }

  /**
   * Performs a POST operation
   */
  create = (params = {}, opts = {}) => {
    return this._request(params, {
      method: 'POST',
      ...opts
    });
  }
}

export default Service;
