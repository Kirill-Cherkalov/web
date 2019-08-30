import http from 'http/index';

export const getList = () => (
  http.get('/book').then(res => res.data)
);

export const remove = id => (
  http.delete('/book', id).then(res => res.data)
);

export const update = ({ id, ...rest }) => (
  http.put(`/book/${id}`, rest).then(res => res.data)
);

export const create = data => (
  http.post('/book', data).then(res => res.data)
);
