import { SET_BMI_STATE } from "../action";
const initialState = {
  data: {
    weight: '',
    height: '',
    name:'',
    date: new Date().toLocaleString().split(',')[0],
  }
};
const bmiState = (state = initialState, action) => {
  switch (action.type) {
    case SET_BMI_STATE:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}
export default bmiState;