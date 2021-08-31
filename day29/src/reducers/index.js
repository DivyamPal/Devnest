// import reducer from "./reducer";
// import reducer2 from "./reducerr";

// import { combineReducers } from "redux";


// const rootReducer = combineReducers({
//     name: reducer,
//     email: reducer2,
// });

// export default rootReducer;

import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";
import themeReducer from "./theme";

const rootReducer = combineReducers({
    place: placeReducer,
    placeData: placeDataReducer,
    theme: themeReducer,
});

export default rootReducer;
