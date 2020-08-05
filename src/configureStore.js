import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const configureStore = () => {
    let store = createStore(reducer, applyMiddleware(thunk))
    return store
}

export default configureStore