import Axios from 'axios';
import { _CONST } from '../constant'

export function getBreedList() {
  return Axios.get(`${_CONST.BASE_URL}/breeds`);
}

export function getCats(params) {
  return Axios.get(`${_CONST.BASE_URL}/images/search?limit=10&page=${params.page}&breed_id=${params.id}`);
}