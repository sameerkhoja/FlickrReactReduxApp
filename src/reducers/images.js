const images = (state = [], action) => {
  switch (action.type) {
    case 'SET_IMAGES_TO_COLUMN':
      return [ ...state, action.images]
    case 'CLEAR_IMAGES':
      return []
    default:
      return state
  }
}

export default images
