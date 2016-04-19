import {createStore} from 'redux'

const reducer = require('./reducer').default

export default () => {
  const store = createStore(reducer)

  if (module.hot) {
    module.hot.accept(() => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
