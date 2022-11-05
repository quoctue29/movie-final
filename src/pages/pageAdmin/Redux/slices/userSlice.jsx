import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { localService } from "../../../../services/localService";
import { getUserServ } from "../../../../services/userServices";

let initialState = {
  user: localService.getUserInfor(),
  loading: false,
};

export const setUserLoginActionServ = createAsyncThunk(
  "/userSlice/login",
  async (dataLogin) => {
    let result = await getUserServ.postUserLogin(dataLogin);
    // phải có return thì kết quả sẽ nhảy vào action payload
    return result.data.content;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  //   reducers là hàm logic bình thường, còn extraReducers là hàm gọi API
  reducers: {
    setUserLogin: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: {
    // Đang gọi API
    [setUserLoginActionServ.pending]: (state, payload) => {
      state.loading = true;
    },
    // gọi API thành công là fulfilled
    [setUserLoginActionServ.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [setUserLoginActionServ.rejected]: (state, payload) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
export const { setUserLogin } = userSlice.actions;
