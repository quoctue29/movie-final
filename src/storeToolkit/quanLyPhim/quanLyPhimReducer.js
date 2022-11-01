import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  {quanLyPhimServices}  from '../../services/quanLyPhimServiec'

const initialState = {
    movieList: [],
    bannerList: [],
    movieDetail: undefined,
    isFetching: false,
    isFetchingDetail: false,
    error: undefined,
    number: 1
}

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } = createSlice({
    name: 'quanLyPhim',
    initialState,
    reducers: {
    },

    // Xử lý những action bất đồng bộ (call API)
    extraReducers: (builder) => {
        builder
            // getMovieList
            .addCase(getMovieList.pending, (state, action) => {
                state.isFetching = true
            })
            .addCase(getMovieList.fulfilled, (state, action) => {
                state.movieList = action.payload
                state.isFetching = false
            })
            .addCase(getMovieList.rejected, (state, action) => {
                state.error = action.payload
                state.isFetching = false
            })
            

            // get movieById
            .addCase(getMovieById.pending, (state, action)=>{
                state.isFetchingDetail = true
            })
            .addCase(getMovieById.fulfilled, (state, action)=>{
                state.isFetchingDetail = false
                state.movieDetail = action.payload
            })
            .addCase(getMovieById.rejected, (state, action)=>{
                state.isFetchingDetail = false
                state.movieDetail = action.payload
            })
    },
})

export const getMovieList = createAsyncThunk(
    'quanLyPhim/getMovieList', //action type
    async (data, { dispatch, getState, rejectWithValue }) => {
        try {
            const value = getState().quanLyPhimReducer
            console.log('value: ', value);
            const result = await quanLyPhimServices.getMovieList()
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

// export const getBannerList = createAsyncThunk(
//     'quanLyPhim/getBannerList', //action type
//     async (data, { dispatch, getState, rejectWithValue }) => {
//         try {
//             const value = getState().quanLyPhimReducer
//             console.log('value: ', value);
//             const result = await quanLyPhimServices.getBannerList()
//             return result.data.content
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//     }
// )

export const getMovieById = createAsyncThunk(
    'quanLyPhim/getMovieById',
    async (movieId, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await quanLyPhimServices.getMovieById(movieId)
            return result.data.content
        }catch(err){
            return rejectWithValue(err.response.data)
        }
    }
)
