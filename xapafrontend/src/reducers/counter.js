

// const counterReducer =(state = 0, action) => { 
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;
//         case  'DECREMENT':
//                 return state - 1;
//         default:
//             return state
//     }
// }

const initialState = {
    count: 0
  };
  
  function counterReducer(state = initialState, action) {
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
      default:
        return state;
    }
  }
  export default counterReducer;