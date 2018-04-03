
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import reducers from '../src/reducers/index'; //Import the reducer

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)

export default {store, persistor};

