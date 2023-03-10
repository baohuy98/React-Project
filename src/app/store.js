import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import bookingReducer from "../features/Booking/bookingSlice";
import authReducer from "../features/Auth/authSlice"
const reducer = combineReducers({
  booking: bookingReducer,
  auth :  authReducer ,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
