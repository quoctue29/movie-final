import { Button, Space, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

export const headerFilmTable = [
  {
    title: "Mã phim",
    dataIndex: "maPhim",
    key: "maPhim",
    width: 80,
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên phim",
    dataIndex: "tenPhim",
    key: "tenPhim",
    width: 100,

    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Trailer phim",
    dataIndex: "trailer",
    key: "trailer",
    width: 200,
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Hình ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    width: 200,

    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Ngày khởi chiếu",
    dataIndex: "ngayKhoiChieu",
    key: "ngayKhoiChieu",
    width: 150,

    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Mô tả",
    dataIndex: "moTa",
    key: "moTa",
    width: 300,

    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
    render: (action) => {
      return (
        <>
          
          <button
            className="bg-blue-500  px-3 text-white hover:bg-blue-300 hover:text-white transition duration-200 border-none focus:bg-blue-700 focus:text-white mr-1 h-10 rounded-md"
            onClick={() => {
              action.onEdit();
            }}
          >
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
          </button>
          <button
            className="bg-red-500  px-3 text-white hover:bg-red-300 hover:text-white transition duration-200 border-none focus:bg-red-600 focus:text-white mr-1 h-10 rounded-md"
            onClick={() => {
              action.onDelete();
            }}
          >
            <i class="fa-sharp fa-solid fa-trash"></i>
          </button>
          <button
            type="primary"
            className="bg-green-500  px-3 text-white hover:bg-green-300 hover:text-white transition duration-200 border-none focus:bg-green-600 focus:text-white h-10 rounded-md"
            onClick={() => {
              action.onCreateNewSchedule();
            }}
          >
            <i class="fa-sharp fa-solid fa-video"></i>
          </button>
        </>
      );
    },
  },
];

// {
//     "maPhim": 8909,
//     "tenPhim": "JURASSIC WORLD DOMINION  ",
//     "biDanh": "jurassic-world-dominion",
//     "trailer": "https://www.youtube.com/embed/3y0KM5jUnmk",
//     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-dominion_gp01.jpg",
//     "moTa": "Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới ",
//     "maNhom": "GP01",
//     "ngayKhoiChieu": "2022-05-10T00:00:00",
//     "danhGia": 8,
//     "hot": false,
//     "dangChieu": false,
//     "sapChieu": true
// }
