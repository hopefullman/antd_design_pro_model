import request from '../util/request';

export function onDidGet() {
  return request('http://localhost:8000/api/SideMenu');
}

export function addOne(data) {
  return request('/api/cards/add', {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}
