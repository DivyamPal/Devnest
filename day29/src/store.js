// import rootReducer from "./reducers";
// import { createStore } from "redux";

// const store = createStore(rootReducer);

// export default store;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
