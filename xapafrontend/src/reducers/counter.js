
const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  console.log(state)
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: initialState.count++
        };
        
      case 'DECREMENT':
        return {
          count: initialState.count--
        };
      default:
        return state;
    }
  }
  export default counterReducer