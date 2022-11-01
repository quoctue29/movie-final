import React, { useEffect } from "react";

import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuanLyPhim } from "../../storeToolkit/quanLyPhim/quanLyPhimSelector";
import { getMovieById } from "../../storeToolkit/quanLyPhim/quanLyPhimReducer";
import moment from "moment";

const Detail = () => {
  const param = useParams()
  const dispatch = useDispatch()
  const {movieDetail} = useQuanLyPhim()

  useEffect(() => {
    dispatch(getMovieById(param.movieIds))
  }, [])

  return <div style={{backgroundImage:'url(https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h123_gp01.jpg)',minHeight:'100vh'}}>
      <CustomCard 
      style={{paddingTop:150, minHeight:'100vh'}}
      effectColor="#fff "
      color="fff"
      blur={20}
      borderRadius={0}>
        <div className="grid grid-cols-12">
            <div className="col-span-4 col-start-4">
                <div className="grid grid-cols-2">
                  <img src={movieDetail?.hinhAnh} alt={movieDetail?.name}  />
                </div>
                <div>
                <p>{movieDetail?.tenPhim}</p>
                    <p>{movieDetail?.moTa}</p>
                    <p>Đánh giá: {movieDetail?.danhGia}</p>
                    <p>{moment(movieDetail?.ngayKhoiChieu).format('DD-MM-YYYY hh:mm')}</p>
                    <button className="btn btn-success">Trailer</button>
                </div>
            </div>
        </div>
      </CustomCard>
  </div>;
};

export default Detail;

