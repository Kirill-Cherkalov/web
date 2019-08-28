import http from 'http/index';

export const register = data => (
  http.post('/auth/register', data).then(res => res.data)
);

export const isAuthenticated = () => (
  http.post('/auth/isAuthenticated').then(res => res.data)
);

export const logout = () => (
  http.get('/auth/logout').then(res => res.data)
);

export const login = data => (
  http.post('/auth/login', data).then(res => res.data)
);
