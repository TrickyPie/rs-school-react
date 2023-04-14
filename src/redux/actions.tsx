import { Plant } from '../components/card/Card';

export const ADD_SEARCH = 'ADD_SEARCH';
export const ADD_CARDS = 'ADD_CARDS';

export function addSearch(payload: string) {
  return { type: ADD_SEARCH, payload };
}

export function addCards(payload: Plant[]) {
  return { type: ADD_CARDS, payload };
}
