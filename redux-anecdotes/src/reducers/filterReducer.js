const filterReducer = (state = '', action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_FILTER_STRING':
      return action.filterString
    default:
      return state
  }
}

export const setFilterString = filterString => {
  return {
    type: 'SET_FILTER_STRING',
    filterString,
  }
}

export default filterReducer
