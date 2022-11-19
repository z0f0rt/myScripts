const sixthDefState =  {
    count6:0
}


export const  sixthReducer = (state =  sixthDefState, action) => {
    switch (action.type) {
      case "INCREMENT11":
        return { ...state, count6: state.count6 + action.payload };
      case "DECREMENT12":
        return { ...state, count6: state.count6 - action.payload };
      default:
        return state;
    }
  };