import { api } from "../constants/api";

const quanLyNguoiDungServices = {
  postUser: (thongTinDangNhap) => {
    return api.post("api/QuanLyNguoiDung/DangNhap", thongTinDangNhap);
  },
};

export { quanLyNguoiDungServices };
