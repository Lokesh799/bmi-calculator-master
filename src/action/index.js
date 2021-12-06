export const SET_BMI_STATE = 'SET_BMI_STATE'
export const SET_APP_STATE = 'SET_APP_STATE'
export const SET_APP_DATA = 'SET_APP_DATA'


export const setBmiState = (payload) => ({ type: SET_BMI_STATE, payload })

export const setAppState=(payload)=>{
  return{
    type: SET_APP_STATE,
    payload

  }
}
export const setAppData = (payload)=>{
  return{
    type: SET_APP_DATA,
    payload
  }
}
