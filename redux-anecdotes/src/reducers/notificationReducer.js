const notificationReducer = (state = 'Application started!', action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message
    default:
      return state
  }
}

export const setNotification = (message, timeout = 5) => {
  return async dispatch =>  {
    dispatch({
      type: 'SET_MESSAGE',
      message,
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_MESSAGE',
        message: ''
      })
    }, timeout*1000)
  }
}

export default notificationReducer
