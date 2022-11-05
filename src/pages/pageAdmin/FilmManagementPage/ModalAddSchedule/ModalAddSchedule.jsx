import {
  Button,
  DatePicker,
  TimePicker,
  Modal,
  Select,
  Switch,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
// import { getUserServ } from "../../../Services/userServices";
import { useSelector } from "react-redux";
import { movieService } from "../../../../services/movieService";
import moment from "moment";
const { TextArea } = Input;

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
    offset: 0,
  },
  wrapperCol: {
    span: 16,
  },
  labelAlign: "left",
};
const validateMessages = {
  required: "Bắt buộc",
};

const ModalAddSchedule = ({
  isOpenModalAddSchedule,
  setIsOpenModalAddSchedule,
  fetchFilmList,
  filmInfor,
}) => {
  const [heThongRap, setHeThongRap] = useState([]);
  const [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    const fetchMovieInfor = async () => {
      let result = await movieService.getMovieInfor(filmInfor.maPhim);

      setHeThongRap(result.data.content.heThongRapChieu);
    };
    fetchMovieInfor();
  }, []);
  const handleChooseHeThongRap = (maHeThong) => {
    const heThongRapChosen = heThongRap.filter((item) => {
      return item.maHeThongRap == maHeThong;
    });

    setCumRap(heThongRapChosen[0].cumRapChieu);
  };
  return (
    <>
      <Modal
        title="Thêm lịch chiếu"
        footer={null}
        centered
        visible={isOpenModalAddSchedule}
        onCancel={() => {
          setIsOpenModalAddSchedule(false);
        }}
        width={1000}
      >
        <div>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={(values) => {
              console.log(values);
              const ngayChieu = moment(values.ngayChieu._d).format(
                "DD/MM/YYYY"
              );
              const gioChieu = moment(values.gioChieu._d).format("hh:mm:ss");
              let ngayChieuGioChieu = `${ngayChieu} ${gioChieu}`;
              let newValue = {
                ...values,
                maPhim: filmInfor.maPhim,
                ngayChieuGioChieu: ngayChieuGioChieu,
              };
              movieService
                .postMovieSchedule(newValue)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            validateMessages={validateMessages}
            className="w-5/6 mt-2 max-h-max xl:h-128 flex flex-col justify-center mx-auto"
          >
            <Form.Item
              name={["heThongRap"]}
              label="Hệ thống rạp chiếu"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Chọn hệ thống rạp chiếu"
                onChange={(value) => {
                  handleChooseHeThongRap(value);
                }}
              >
                {heThongRap?.map((heThongRap) => {
                  return (
                    <Option value={heThongRap.maHeThongRap}>
                      {heThongRap.tenHeThongRap}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name={["maRap"]}
              label="Cụm rạp chiếu"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Chọn cụm rạp chiếu">
                {cumRap?.map((rap) => {
                  return <Option value={rap.maCumRap}>{rap.tenCumRap}</Option>;
                })}
              </Select>
            </Form.Item>

            <Form.Item
              name={["ngayChieu"]}
              label="Ngày chiếu"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                placeholder="Chọn ngày chiều"
                className="w-72"
                format={"DD/MM/YYYY"}
              />
            </Form.Item>
            <Form.Item
              name="gioChieu"
              label="Giờ chiếu"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TimePicker placeholder="Chọn giờ chiều" format={"hh:mm:ss"} />
            </Form.Item>

            <Form.Item
              name={["giaVe"]}
              label="Giá vé"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input className="w-32" placeholder="Nhập giá vé" />
            </Form.Item>

            <div className="text-center mb-8">
              <button className="py-1 px-4 bg-blue-700 md:text-base rounded-md text-white">
                Thêm lịch chiếu
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddSchedule;

// Pha&n body gửi ve&backend dạng formData
// let formData = new FormData();
// formData.append(‘maPhim’, ‘giaTri’);
// formData.append(‘tenPhim’, ‘giaTri’);
// formData.append(‘moTa’, ‘giaTri’);
// formData.append(‘ngayKhoiChieu’, ‘giaTri’);
// formData.append(‘sapChieu’, ‘giaTri’);
// formData.append(‘danChieu’, ‘giaTri’);
// formData.append(‘hot’, ‘giaTri’);
// formData.append(‘danhGia’, ‘giaTri’);
// formData.append(‘maPhim’, ‘giaTri’);
// formData.append(‘File’, ‘blobFile’,hinhAnh);
