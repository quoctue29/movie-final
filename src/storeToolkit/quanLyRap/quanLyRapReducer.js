import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyRapServices } from "../../services/quanLyRapService";

const initialState = {
  movieRap: [],
  movieCinema: [],
  isFetching: false,
  error: undefined,
};
export const { reducer: quanLyRapReducer, actions: quanLyRapActions } =
  createSlice({
    name: "quanLyRap",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
      builder
        // getMovieRap
        .addCase(getMovieRap.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(getMovieRap.fulfilled, (state, action) => {
          state.movieRap = action.payload;
          state.isFetching = false;
        })
        .addCase(getMovieRap.rejected, (state, action) => {
          state.error = action.payload;
          state.isFetching = false;
        });

      //getThongTinRap
      // .addCase(getThongTinRap.pending, (state, action) => {
      //     state.isFetching = true
      // })
      // .addCase(getThongTinRap.fulfilled, (state, action) => {
      //     state.movieCinema = action.payload
      //     state.isFetching = false
      // })
      // .addCase(getThongTinRap.rejected, (state, action) => {
      //     state.error = action.payload
      //     state.isFetching = false
      // })
    },
  });

export const getMovieRap = createAsyncThunk(
  "quanLyRap/getCinemaList", //action type
  async (maLichChieu, { dispatch, getState, rejectWithValue }) => {
    try {
      const value = getState().quanLyRapReducer;
      const result = await quanLyRapServices.getMovieRap(maLichChieu);
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const getThongTinRap = createAsyncThunk(
//     'quanLyRap/getCinemaTTList', //action type
//     async (data, { dispatch, getState, rejectWithValue }) => {
//         try {
//             const value = getState().quanLyRapReducer
//             const result = await quanLyRapServices.getThongTinRap();
//             return result.data.content
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//     }
// )
