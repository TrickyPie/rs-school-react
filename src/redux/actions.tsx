export const ADD_SEARCH = 'ADD_SEARCH';
export const GET_SEARCH = 'GET_SEARCH';
export const DO_REQUEST = 'DO_REQUEST';

export function addSearch(payload: string) {
  return { type: ADD_SEARCH, payload };
}

export function getSearch(payload: string) {
  return { type: GET_SEARCH, payload };
}

/* export function doRequest(payload: string) {
  return { type: DO_REQUEST, payload };
} */
