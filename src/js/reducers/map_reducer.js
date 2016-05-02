import * as types from '../constants/ActionTypes';

export default function map_reducer(state = 0, action) {
  switch (action.type) {
      
    case types.LOAD_MAP:
 
      return {
        ...state,
        map: 
        friends: state.friends.concat(newId),
        friendsById: [
          ...state.friendsById,
          {
            id: newId,
            name: action.name
          }
        ]
      };
      
    default:
      return state
  }
}