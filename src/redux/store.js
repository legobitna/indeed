import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    email:'',
    password:''
}
const reducer = (state=initialState, action) => {
 switch(action.type){
     case "SIGN_IN":
         return {
             
             email:action.payload.email,
             password: action.payload.password
         };
        //  return {
        //      ...state,
        //      ...action.payload
        //  }
     case "SIGN_OUT":
         return initialState;
      default:
          return state
 }
    
}


const store= createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
