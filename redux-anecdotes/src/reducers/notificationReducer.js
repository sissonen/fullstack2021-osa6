const notificationReducer = (state = {message: 'Application started!', timeoutId: null }, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_MESSAGE':
      return { ...state, message: action.message }
    case 'SET_TIMEOUT_ID':
      return { ...state, timeoutId: action.timeoutId }
    default:
      return state
  }
}

export const setNotification = (message, timeout = 5, timeoutId = null) => {
  return async dispatch =>  {
    dispatch({
      type: 'SET_MESSAGE',
      message,
    })
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    const newTOId = setTimeout(() => {
      dispatch({
        type: 'SET_MESSAGE',
        message: ''
      })
    }, timeout*1000)
    dispatch({
      type: 'SET_TIMEOUT_ID',
      timeoutId: newTOId
    })
  }
}

export default notificationReducer
