import reducer from "./reducer";
import reducer2 from "./reducerr";

import { combineReducers } from "redux";


const rootReducer = combineReducers({
    name: reducer,
    email: reducer2,
});

export default rootReducer;