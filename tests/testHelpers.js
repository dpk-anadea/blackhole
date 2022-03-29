const http = require('http')

export const request = url => new Promise(resolve => {
  http.get({path: url}, response => {
    let data = '';
    response.on('data', _data => data += _data);
    response.on('end', () => resolve(data));
  })
})
