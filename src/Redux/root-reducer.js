import { combineReducers } from "redux";
import UserReducer from "./User/User.reducer";
import CartReducer from "./Cart/Cart.Reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./Directory/directory.reduce";
import shopReducer from "./Shop/Shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
