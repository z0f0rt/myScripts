const firstDefState =  {
    count1:0
}


export const firstReducer = (state = firstDefState, action) => {
    switch (action.type) {
      case "INCREMENT1":
        return { ...state, count1: state.count1 + action.payload };
      case "DECREMENT2":
        return { ...state, count1: state.count1 - action.payload };
      default:
        return state;
    }
  };
  