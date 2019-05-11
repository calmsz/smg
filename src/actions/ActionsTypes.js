let nextRound = 0

export const AddRound = card => ({
  type: AddRound,
  payload: {
    id: ++nextRound,
    card
  }
})
