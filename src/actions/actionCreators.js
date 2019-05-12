let nextRound = 0
let nextAttempt = 0

export const AddRound = card => ({
  type: 'AddRound',
  payload: {
    id: ++nextRound,
    card
  }
})

export const FillAttempt = card => ({
  type: 'FillAttempt',
  payload: {
    id: ++nextAttempt,
    card
  }
})

export const ClearAttempt = () => ({
  type: 'ClearAttempt',
  payload: {}
})
