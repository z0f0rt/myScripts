const secondDefState =  {
    count2:0
}


 export const secondReducer = (state = secondDefState, action) => {
    switch (action.type) {
      case "INCREMENT3":
        return { ...state, count2: state.count2 + action.payload };
      case "DECREMENT4":
        return { ...state, count2: state.count2 - action.payload };
      default:
        return state;
    }
  };