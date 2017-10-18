const intialState = 0;

export default function reducer(state = intialState, action){
  switch (action.type) {
    case 'INCREAMENT_PROGRESS':
      return state + 1;

     break;
    case 'DECREAMENT_PROGRESS':
     return Math.max(state -1, 0);

     break
    default:{
      return state
    }

  }
}
