import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getMovieList } from "../../storeToolkit/quanLyPhim";
import { getMovieRap, useQuanLyRap } from "../../storeToolkit/quanLyRap";
import { useQuanLyPhim } from "../../storeToolkit/quanLyPhim/quanLyPhimSelector";
import { useQueryUrl } from "../../hooks/useQueryUrl";
import { Skeleton } from "antd";
import HomeMenu from "../pageHome/HomeMenu";
const Home = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParam] = useSearchParams({
    isShowing: true,
  });

  const { movieRap } = useQuanLyRap();
  const [query, setQueryUrl] = useQueryUrl({
    isShowing: true,
  });

  console.log("query: ", query);
  const v = useQueryUrl();
  const { movieList, isFetching, error, number } = useQuanLyPhim();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getMovieRap());
  }, []);
  if (isFetching) {
    return (
      <div className="container">
        <div className="row">
          {[...Array(20)].map((e) => {
            return (
              <div className="col-3 mt-4">
                <Skeleton.Button active block style={{ height: "350px" }} />
                <Skeleton.Input active block className="mt-3" />
                <Skeleton.Button active className="mt-3" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="Home bg-neutral-800">
      <div className="container-sm">
        <div className="mt-3">
          <Button
            className={{
              active: searchParams.get("isShowing") === "true",
            }}
            onClick={() => {
              setQueryUrl({
                isShowing: true,
              });
            }}
          >
            Showing Movie
          </Button>
          <Button
            className={
              ("ms-3",
              {
                active: searchParams.get("isShowing") === "false",
              })
            }
            onClick={() => {
              setQueryUrl({
                isShowing: false,
              });
            }}
          >
            Coming Movie
          </Button>
        </div>

        <div className="grid grid-cols-5 gap-5 ">
          {movieList
            .filter((item) =>
              query.isShowing === "false" ? item.sapChieu : !item.sapChieu
            )
            .map((film) => (
              <div className="mt-3" key={film.maPhim}>
                <div className="card h-100">
                  <img className="h-70" src={film.hinhAnh} alt={film.name} />
                  <div className="card-body">
                    <p className="text-20">{film.tenPhim}</p>
                    <button
                      className="px-3 py-2 bg-green-700 text-white rounded"
                      onClick={() => navigate(`/detail/${film.maPhim}`)}
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <HomeMenu movieRap={movieRap} />
      </div>
    </div>
  );
};

export default Home;

const Button = styled.button`
  padding: 12px 20px;
  border: 1px solid #000;
  background-color: transparent;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 4px 4px rgba(0, 0, 0, 0.1);
  }

  &.active {
    background-color: #000;
    color: #fff;
  }
`;
