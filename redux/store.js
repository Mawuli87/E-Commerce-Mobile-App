import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";


export const store = configureStore({
  reducer: {
   user:userReducer,
   other:otherReducer,
   product: productReducer,
   cart: cartReducer,
  },
});

//export const server = "https://e-commerce-server-r5ns.onrender.com/api/v1";
export const server = "https://e-commerce-server-r5ns.onrender.com/api/v1";