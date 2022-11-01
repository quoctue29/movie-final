import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { quanLyPhimReducer } from "./quanLyPhim/quanLyPhimReducer";
import { quanLyRapReducer } from "./quanLyRap/quanLyRapReducer"

const rootReducer = combineReducers({
  quanLyPhimReducer,
  quanLyRapReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
