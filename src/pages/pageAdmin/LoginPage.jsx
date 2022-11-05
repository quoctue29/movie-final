import { Button, Checkbox, Form, Input } from "antd";
import { Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserServ } from "../../services/userServices";
import { setUserLogin, setUserLoginActionServ } from "./Redux/slices/userSlice";
import { localService } from "../../services/localService";

const { Title } = Typography;
const LoginPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    // getUserServ
    //   .postUserLogin(values)
    //   .then((res) => {
    //     navigate("/");
    //     dispatch(setUserLogin(res.data.content));
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // unwrap sẽ biến dispatch thành promise
    dispatch(setUserLoginActionServ(values))
      .unwrap()
      .then((res) => {
        localService.saveToStorage(res);
        window.location.href = "/";
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" bg-yellow-200">
      <div className="container mx-auto flex items-center h-screen">
        <div className="w-1/2 mx-auto rounded-lg py-12 px-12 bg-white">
          <Form
            className=" mt-6 max-h-max xl:h-128 flex flex-col justify-center"
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="text-center">
              <Title className="">
                <p className="text-3xl">Đăng nhập</p>
              </Title>
            </div>
            <Form.Item
              label="Tên đăng nhập"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div className="text-center mb-4">
              <button className="py-1 px-4 bg-blue-700 md:text-lg  rounded-md text-white">
                Đăng nhập
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
