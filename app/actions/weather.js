import * as types from '../constants/ActionTypes';

export function changeCity(name) {
  return { type: types.CHANGE_CITY, name };
}
