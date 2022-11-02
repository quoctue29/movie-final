import React, { useEffect } from "react";
import { Tabs, Radio, Space } from "antd";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuanLyPhim } from "../../storeToolkit/quanLyPhim/quanLyPhimSelector";
import { getMovieById } from "../../storeToolkit/quanLyPhim/quanLyPhimReducer";
import moment from "moment";
import "../../assets/styles/circle.css";

const Detail = () => {
  const { TabPane } = Tabs;
  const param = useParams();
  const dispatch = useDispatch();
  const { movieDetail } = useQuanLyPhim();

  useEffect(() => {
    dispatch(getMovieById(param.movieIds));
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          `url(${movieDetail?.hinhAnh} )`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#fff "
        color="fff"
        blur={10}
        borderRadius={0}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3 ">
              <img className="col-span-1" src={movieDetail?.hinhAnh} style={{width:'100%', height:350}} alt={movieDetail?.name} />
              <div className="col-span-2 text-white ms-5" style={{marginTop:'10%'}}>
                <p className="text-sm"> Ngày Chiếu : 
                   {moment(movieDetail?.ngayKhoiChieu).format(
                    "DD-MM-YYYY hh:mm"
                  )}
                </p>
                <p className="text-white text-4xl">{movieDetail?.tenPhim}</p>
                <p>{movieDetail?.moTa}</p>
                <button className="btn btn-danger">Trailer</button>
              </div>
            </div>
          </div>

          <div className="col-span-4 ms-5"  style={{marginTop:'10%'}}>
            <h1 style={{marginLeft:'12%'}} className="text-white text-2xl">Đánh Giá</h1>
            <div className={`c100 p${movieDetail?.danhGia*10} big`}>
              <span>{movieDetail?.danhGia*10}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <Tabs tabPosition={"left"}>
            <TabPane tab="Tab 1" key="1">
              content of tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              content of tab 1
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              content of tab 1
            </TabPane>
            <TabPane tab="Tab 4" key="4">
              content of tab 1
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
};

export default Detail;
