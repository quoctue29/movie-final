import axios from "axios";
import { Services } from "./configURL";

export const getUserServ = {
  postUserLogin: (dataLogin) => {
    // return axios({
    //   url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
    //   method: "POST",
    //   data: dataLogin,
    //   headers: { TokenCybersoft: CYBERSOFT_TOKEN },
    // });
    return Services.post("/api/QuanLyNguoiDung/DangNhap", dataLogin);
  },
  // postUserRegister: (dataRegister) => {
  //   return Services.post("/api/QuanLyNguoiDung/DangKy", dataRegister);
  // },
  getUserList: () => {
    return Services.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung");
  },
  postNewAccount: (newAccount) => {
    return Services.post("/api/QuanLyNguoiDung/ThemNguoiDung", newAccount);
  },
  getSearchUserInfor: (searchKey) => {
    return Services.get(
      `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${searchKey}`
    );
  },
  deleteUserInfor: (deleteUser) => {
    return Services.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${deleteUser}`
    );
  },
  postEditedUserInfor: (editedInfor) => {
    return Services.post(
      `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      editedInfor
    );
  },
};
