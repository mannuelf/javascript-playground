import { actionTypes } from '../actions';

/*
 * @function successReducer
 * @param {array} state - Action of guessed words.
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 * */
const sucessReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

export default sucessReducer;
