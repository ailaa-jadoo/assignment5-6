// import { createStore, applyMiddleware } from 'redux';
// import {thunk} from 'redux-thunk';
// import todoReducer from './reducers';

// const store = createStore(todoReducer, applyMiddleware(thunk));

// export default store;



import { configureStore } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk';
import todoReducer from './reducers';

const store = configureStore({
    reducer: todoReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk
      })
    // middleware: [thunk]
  })

export default store;   




// import { configureStore } from '@reduxjs/toolkit'
// import {thunk} from 'redux-thunk';
// import todoReducer from './reducers';

// const store = configureStore({
//     reducer: todoReducer,
//     middleware: thunk
//   })

// export default store;   