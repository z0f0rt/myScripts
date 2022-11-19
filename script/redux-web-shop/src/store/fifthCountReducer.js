const fifthDefState =  {
    count5:0
}


export const fifthReducer = (state = fifthDefState, action) => {
    switch (action.type) {
      case "INCREMENT9":
        return { ...state, count5: state.count5 + action.payload };
      case "DECREMENT10":
        return { ...state, count5: state.count5 - action.payload };
      default:
        return state;
    }
  };