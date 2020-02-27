import Axios from 'axios';
import { _CONST } from '../constant'

export function getBreedList() {
  return Axios.get(`${_CONST.BASE_URL}/breeds`);
}