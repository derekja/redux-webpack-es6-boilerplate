export default function app_reducer(state = {}, action) {
  switch (action.type) {
    case 'Run_Tile':
      console.log('runtile reducer');
      return {
        ...state,
        txt: action.txt
      }
    default:
      return state
  }
}