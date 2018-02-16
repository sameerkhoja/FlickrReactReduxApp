const word = (state = '', action) => {
  console.log(action.type);
  switch (action.type) {
    case 'CHANGE_INPUT':
      return action.word
    default:
      return state
  }
}

export default word
