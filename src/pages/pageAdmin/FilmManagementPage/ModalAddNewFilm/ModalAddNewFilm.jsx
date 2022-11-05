import { Button, DatePicker, Modal, Select, Switch, Upload } from "antd";
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

const ModalAddNewFilm = ({ isOpenModal, setIsOpenModal, fetchFilmList }) => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };
  return (
    <>
      <Modal
        title="Thêm phim mới"
        footer={null}
        centered
        visible={isOpenModal}
        onCancel={() => {
          setIsOpenModal(false);
        }}
        width={1000}
      >
        <div>
          <Form
            {...layout}
            initialValues={{ danhGia: 1 }}
            name="nest-messages"
            onFinish={(values) => {
              console.log(values.sapChieu);
              let startDate = moment(values.ngayKhoiChieu._d).format(
                "DD/MM/YYYY"
              );

              // param đầu tiên trong Blob là 1 array chứa dạng dữ liệu
              let blob = new Blob([values.hinhAnh[0].originFileObj], {
                type: "image/jpg",
              });

              let formData = new FormData();

              formData.append("tenPhim", values.tenPhim);
              formData.append("moTa", values.moTa);
              formData.append("ngayKhoiChieu", startDate);
              formData.append("sapChieu", values.sapChieu);
              formData.append("dangChieu", values.dangChieu);
              formData.append("hot", values.hot);
              formData.append("danhGia", values.danhGia);
              formData.append("maNhom", "GP01");
              formData.append("trailer", values.trailer);
              formData.append(
                "hinhAnh",
                blob,
                values.hinhAnh[0].originFileObj.name
              );

              movieService
                .postNewMovie(formData)
                .then((res) => {
                  message.success(res.data.content);
                  setIsOpenModal(false);
                  fetchFilmList();
                })
                .catch((err) => {
                  message.error(err.response.data.content);
                });
            }}
            validateMessages={validateMessages}
            className="w-5/6 mt-2 max-h-max xl:h-128 flex flex-col justify-center mx-auto"
          >
            <Form.Item
              name={["tenPhim"]}
              label="Tên phim"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["trailer"]}
              label="Trailer phim"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["moTa"]}
              label="Mô tả"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name={["ngayKhoiChieu"]}
              label="Ngày khởi chiếu"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                placeholder="Chọn ngày khởi chiếu"
                className="w-72"
                format={"DD/MM/YYYY"}
              />
            </Form.Item>
            <Form.Item
              label="Sắp chiếu"
              valuePropName="checked"
              name="sapChieu"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label="Đang chiếu"
              valuePropName="checked"
              name="dangChieu"
            >
              <Switch />
            </Form.Item>
            <Form.Item label="18+" valuePropName="checked" name="hot">
              <Switch />
            </Form.Item>
            <Form.Item
              name={["danhGia"]}
              label="Đánh giá"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber min={1} max={10} />
            </Form.Item>
            <Form.Item
              name="hinhAnh"
              label="Chọn ảnh bìa"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Upload name="logo" listType="picture">
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
              </Upload>
            </Form.Item>

            <div className="text-center mb-8">
              <button className="py-1 px-4 bg-blue-700 md:text-base rounded-md text-white">
                Thêm mới
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddNewFilm;

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
