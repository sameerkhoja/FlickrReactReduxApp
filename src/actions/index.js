export const setImagesToColumn = (images, i) => ({
  type: 'SET_IMAGES_TO_COLUMN',
  images,
  i
})

export const changeInput = (word) => ({
  type: 'CHANGE_INPUT',
  word
})

export const clearImages = () => ({
  type: 'CLEAR_IMAGES'
})
