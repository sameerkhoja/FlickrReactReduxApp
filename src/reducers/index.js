import { combineReducers } from 'redux'
import images from './images'
import word from './word'

const App = combineReducers({
  images,
  word
})

export default App
