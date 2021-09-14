import * as redux from "redux";

//Action
export const INCREAMENT = "counter/increament";
export const DECREAMENT = "counter/decreament";

const countState = {
  count: 0,
};
//Reducer
const countreducer = (state = countState, action) => {
  switch (action.type) {
    case INCREAMENT: {
      return { ...state, count: state.count + 1 };
    }
    case DECREAMENT: {
      return { ...state, count: state.count - 1 };
    }

    default:
      return state;
  }
};
const testreducer=(state=[],action)=>{
  switch(action.type){
    case 'push':{
      const data=[...state];
      data.push(action.value);
      return [...data];
    }
    case 'pop':{
      const data=[...state];
      data.pop();
      return[...data];
    }
    default:{
      return state;
    }
  }
}
//combine reducer
const rootReducer=(state={},action)=>{
  return{
     counter:countreducer(state.counter,action),
     tester:testreducer(state.tester,action)
  }
  
}
//store
const store=redux.createStore(rootReducer);
export default store