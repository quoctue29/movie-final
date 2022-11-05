import axios from "axios";
import { BASE_URL, CYBERSOFT_TOKEN, Services } from "./configURL";

export const movieService = {
  getMovieList: () => {
    return Services.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  postNewMovie: (movieData) => {
    return Services.post("/api/QuanLyPhim/ThemPhimUploadHinh", movieData);
  },
  deleteMovie: (maPhim) => {
    return Services.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
  editMovie: (movieEditedData) => {
    return Services.post(`/api/QuanLyPhim/CapNhatPhimUpload`, movieEditedData);
  },
  getMovieInfor: (maPhim) => {
    return Services.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
  },
  postMovieSchedule: (schedule) => {
    return Services.post(`/api/QuanLyDatVe/TaoLichChieu`, schedule);
  },
};
