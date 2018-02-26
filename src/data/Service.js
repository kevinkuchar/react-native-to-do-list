class Service {
  constructor(opts) {
    this.url = opts.url;
  }

  _getQueryString = params => Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

  _request = (params, opts) => {
    let body;
    const method = opts.method || 'GET';
    const headers = opts.headers || {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    if (['GET', 'DELETE'].includes(opts.method)) {
      this.url = `${this.url}?${this._getQueryString(params)}`;
    } else {
      body = JSON.stringify(params);
    }

    return fetch(this.url, { method, headers, body })
      .then(response => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  get(params = {}, opts = {}) {
    return this._request(params, {
      method: 'GET',
      ...opts
    });
  }
}

export default Service;

// export default {
//   get: params => request(Object.assign({ method: 'GET' }, params)),
//   post: params => request(Object.assign({ method: 'POST' }, params)),
//   put: params => request(Object.assign({ method: 'PUT' }, params)),
//   delete: params => request(Object.assign({ method: 'DELETE' }, params))
// };
