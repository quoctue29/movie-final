import { Divider, Tabs } from "antd";
import TabPane from "antd/lib/tabs/TabPane";
import moment from "moment";
import React, { Fragment } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

export default class HomeMenu extends React.PureComponent {
  state = {
    tabPosition: "left",
  };
  handleClickBooking = (id) => {
    console.log(id);
    const navigate = useNavigate();

    navigate(`/ticket/${id}`);
  };

  handleRap = () => {
    return this.props.movieRap?.map((heThongRap, index) => {
      let { tabPosition } = this.state;
      // const navigate = useNavigate();
      return (
        <TabPane
          tab={
            <img src={heThongRap.logo} className="rounded-full" width={50} />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        className="bg-white"
                        src={heThongRap.logo}
                        width={50}
                      />{" "}
                      <br />
                      <div className="text-white ml-10">
                        {cumRap.tenCumRap}
                        <p className="text-red-400">Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim.map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5" style={{ display: "flex" }}>
                          <div style={{ display: "flex" }}>
                            <img
                              style={{ height: 75, width: 75 }}
                              src={phim.hinhAnh}
                              alt={phim.tenPhim}
                              onError={(e) =>
                                (e.target.onerror = null)(
                                  (e.target.src =
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg")
                                )
                              }
                            />
                            <div>
                              <h1 className="ml-6 text-20 text-green-500">
                                {phim.tenPhim}
                              </h1>
                              <p className="ml-6 text-15 text-white">
                                {cumRap.diaChi}
                              </p>
                              <div className="ml-6 grid grid-cols-5 gap-5">
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        className="text-15 text-orange-500"
                                        key={index}
                                        to={`/ticket/${lichChieu.maLichChieu}`}
                                        // onClick={() =>
                                        //   this.handleClickBooking(
                                        //     lichChieu.maLichChieu
                                        //   )
                                        // }
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
          ;
        </TabPane>
      );
    });
  };
  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <Tabs tabPosition={tabPosition}>{this.handleRap()}</Tabs>;
      </>
    );
  }
}
