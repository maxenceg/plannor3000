// @flow
import request from 'superagent';

const baseUrl = 'https://api.github.com';
const backendBaseUrl = process.env.REACT_APP_API_BASE_URL || '';

export const makeGetRequest = (endpoint, data) => {
  if (data === undefined) {
    return request.get(`${baseUrl}${endpoint}`).set('Accept', 'application/json');
  }

  return request
    .get(`${baseUrl}${endpoint}`)
    .query(data)
    .set('Accept', 'application/json');
};

export const makePostRequest = (endpoint, data) =>
  request
    .post(`${baseUrl}${endpoint}`)
    .send(data)
    .set('Accept', 'application/json');

export const makeLoginRequest = (endpoint, data) =>
  request
    .post(`${backendBaseUrl}${endpoint}`)
    .send(data);

export const login = async (endpoint, data) => {
  const response = await makeLoginRequest(endpoint, data);
  localStorage.setItem('token', response.body.token);
};
