import { combineReducers } from "redux";
import getUserReducers from "./getUserReducers";

const appReducer = combineReducers({
  getUserReducers,
});
const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
      state = undefined;
    }
  
    return appReducer(state, action);
  };
export default rootReducer;