import { createStore } from "redux";
import cardReducers from "../Reducers/CartReducers";

   export const store=createStore(cardReducers);