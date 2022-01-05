const timeoutReducer = (state = null, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_TIMEOUT_ID':
      return action.timeoutId
    default:
      return state
  }
}

export const setTimeout = (timeoutId = null) => {
  return async dispatch =>  {
    dispatch({
      type: 'SET_TIMEOUT_ID',
      timeoutId: timeoutId
    })
  }
}

export default timeoutReducer
