import React, { Fragment, useEffect } from "react";
import { Button, Table, Typography, Form } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList, useQuanLyPhim } from "../../storeToolkit/quanLyPhim";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const { Search } = Input;
const Film = () => {
  const { movieList } = useQuanLyPhim();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value) => console.log(value);
  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      value: (text, Object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              ỏnError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLoverCase().trim();
        let tenPhimB = b.tenPhim.toLoverCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      //   sorter: (a, b) => {
      //     let moTaA = a.moTa.toLoverCase().trim();
      //     let moTaB = b.moTa.toLoverCase().trim();
      //     if (moTaA > moTaB) {
      //       return 1;
      //     }
      //     return -1;
      //   },
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      width: "20%",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      //   sorter: (a, b) => {
      //     let moTaA = a.moTa.toLoverCase().trim();
      //     let moTaB = b.moTa.toLoverCase().trim();
      //     if (moTaA > moTaB) {
      //       return 1;
      //     }
      //     return -1;
      //   },
      render: (text, film) => {
        return (
          <Fragment>
            <button className="text-white bg-green-600 mr-3">
              <i class="fa-sharp fa-solid px-2 fa-pen-to-square"></i>
            </button>
            <button className="text-white px-2 bg-red-600">
              <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
          </Fragment>
        );
      },
      width: "20%",
    },
  ];
  const data = movieList;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h3 className="text-30">Quản lý phim</h3>
      <Button className="mb-3">Thêm phim</Button>
      <Search
        className="mb-4"
        placeholder="input search text"
        enterButton
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default Film;
