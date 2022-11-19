const thirdDefState =  {
    count3:0
}

export const thirdReducer = (state =thirdDefState, action) => {
    switch (action.type) {
      case "INCREMENT5":
        return { ...state, count3: state.count3 + action.payload };
      case "DECREMENT6":
        return { ...state, count3: state.count3 - action.payload };
      default:
        return state;
    }
  };