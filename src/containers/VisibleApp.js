import React from 'react'
import { connect } from 'react-redux'
import { changeInput, setImagesToColumn, clearImages } from '../actions'
import App from '../components/App'

const mapStateToProps = state => ({
    word: state.word,
    images: state.images
})

const mapDispatchToProps = dispatch => ({
      setInput: word => dispatch(changeInput(word)),
      addImagesToColumn: (images, i) => dispatch(setImagesToColumn(images, i)),
      removeImages: () => dispatch(clearImages())
})

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default VisibleApp
//
//
// import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
// import TodoList from '../components/TodoList'
//
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// }
//
// const mapStateToProps = (state) => ({
//   todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })
//
// const mapDispatchToProps = {
//   onTodoClick: toggleTodo
// }
//
// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)
//
// export default VisibleTodoList
