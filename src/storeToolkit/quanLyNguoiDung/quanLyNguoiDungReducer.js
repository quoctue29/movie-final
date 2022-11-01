import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungServices } from "../../services/quanLyNguoiDungServices";

const initialState = {
  userLogin: {},
  isFetching: false,
  currentUser: undefined,
  error: undefined,
};
export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {},
  //xử lý những actions bất đồng bộ (call api)
  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isFetching = false;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const postUser = createAsyncThunk(
  "quanLyNguoiDung/postUser",
  async (thongTinDangNhap, { dispatch, getState, rejectWithValue }) => {
    const result = await quanLyNguoiDungServices.postUser(thongTinDangNhap);
    return result.data.content;
  }
);
