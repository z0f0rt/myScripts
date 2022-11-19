const fourthDefState =  {
    count4:0
}


export const fourthReducer = (state = fourthDefState, action) => {
    switch (action.type) {
      case "INCREMENT7":
        return { ...state, count4: state.count4 + action.payload };
      case "DECREMENT8":
        return { ...state, count4: state.count4 - action.payload };
      default:
        return state;
    }
  };