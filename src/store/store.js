import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
  