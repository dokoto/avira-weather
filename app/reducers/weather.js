import * as ActionTypes from '../constants/ActionTypes';

const initialState = [{
  weather: {}
}];

const actionsMap = {
  [ActionTypes.CHANGE_CITY](state, action) {
    return [{
      weather: {
        name: action.name
      }
    }, ...state];
  }
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
