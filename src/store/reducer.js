const initialState = {
    counter: 0,
    results: []
}
const reducer = (state = initialState, action) => {
   switch (action.type) {
   case 'INCREMENT':
   return {
       ...state,
        counter: state.counter + 1 //add or in this case overwrite, considering spread shallow-copy
    }
    case 'DECREMENT':
        const newState = Object.assign({}, state); //alternative to spread shallow-copy
        newState.counter = state.counter - 1 //then get copy and assign altered state
        return newState;
    
    case 'ADD':
   return {
       ...state,
        counter: state.counter + action.value
    }
    case 'SUBTRACT':
    return {
        ...state,
        counter: state.counter - action.value
     }
    case 'STORE_RESULT':
    return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}) //using concat instead of push as push mutates array whilst concat creates a new array
     }
   }
   return state;
}

export default reducer;

