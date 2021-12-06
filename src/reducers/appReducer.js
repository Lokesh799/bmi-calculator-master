import { SET_APP_STATE } from "../action";
import { SET_APP_DATA } from "../action";
import { getData } from "../helpers/localStorage";
const initialState = {
  appstate:getData('data')||[],
  data:{}
};

const appReducer= (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_STATE:
      return {
        ...state,
        appstate: action.payload
      }
    case SET_APP_DATA:{
        return{
          ...state,
          data:action.payload
        }
      }

    default:
      return state;
  }
}
export default appReducer;