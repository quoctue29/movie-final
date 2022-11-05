import { Button, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

export const headerTableUser = [
  {
    title: "Họ Tên",
    dataIndex: "hoTen",
    key: "hoTen",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Tài khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Mật khẩu",
    dataIndex: "matKhau",
    key: "matKhau",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDT",
    key: "soDT",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Loại người dùng",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    render: (text) => {
      return (
        <span>
          {text == "KhachHang" ? (
            <Tag color="purple">Khách hàng</Tag>
          ) : (
            <Tag color="orange">Quản Trị</Tag>
          )}
        </span>
      );
    },
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
    render: (action) => {
      return (
        <>
          <button
            className="bg-blue-500 px-3 text-white hover:bg-blue-300 hover:text-white transition duration-200 border-none focus:bg-blue-700 focus:text-white mr-1 h-10 rounded-md"
            onClick={() => {
              action.onEdit();
            }}
          >
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
          </button>
          <button
            type="primary"
            className="bg-red-500 px-3 text-white hover:bg-red-300 hover:text-white transition duration-200 border-none focus:bg-red-600 focus:text-white h-10 rounded-md"
            onClick={() => {
              action.onDelete();
            }}
          >
            <i class="fa-sharp fa-solid fa-trash"></i>
          </button>
        </>
      );
    },
  },
];

// {
//     "taiKhoan": "hvta2",
//     "hoTen": "Đen Vâu ",
//     "email": "hvta2@gmail.com",
//     "soDT": "012345678984",
//     "matKhau": "hvta2",
//     "maLoaiNguoiDung": "QuanTri"
// }
