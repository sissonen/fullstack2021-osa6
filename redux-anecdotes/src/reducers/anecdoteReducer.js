import anecdoteService from '../services/anecdotes'

export const addVote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const response = await anecdoteService.update(updatedAnecdote)
    dispatch({
      type: 'ADD_VOTE',
      data: updatedAnecdote
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'ADD_VOTE':
      const updatedAnecdote = action.data
      const id = updatedAnecdote.id
      return state.map(anecdote =>
          anecdote.id !== id
            ? anecdote
            : updatedAnecdote
          ).sort((a,b) => b.votes - a.votes)
    case 'CREATE':
      return [...state, action.data]
    case 'INIT':
      return action.data.sort((a,b) => b.votes - a.votes)
    default:
      return state
  }

  return state
}

export default reducer
