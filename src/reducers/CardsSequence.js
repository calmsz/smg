export function CardsSequence (state = { currentArray: [], attemptArray: [] }, action) {
  if (action.type === 'AddRound') {
    const { card } = action.payload
    return {
      ...state,
      currentArray: [...state.currentArray, card],
      attemptArray: [...state.attemptArray]
    }
  }

  if (action.type === 'FillAttempt') {
    const { card } = action.payload
    return {
      ...state,
      currentArray: [...state.currentArray],
      attemptArray: [...state.attemptArray, card]
    }
  }

  if (action.type === 'ClearAttempt') {
    return {
      ...state,
      currentArray: [...state.currentArray],
      attemptArray: []
    }
  }

  return state
}
