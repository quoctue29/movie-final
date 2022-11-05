import { message } from "antd";
import React, { useState, useEffect } from "react";
import { movieService } from "../../../services/movieService";
import FilmTable from "./FilmTable/FilmTable";
import ModalAddNewFilm from "./ModalAddNewFilm/ModalAddNewFilm";
import ModalAddSchedule from "./ModalAddSchedule/ModalAddSchedule";
import ModalEditFilm from "./ModalEditFilm/ModalEditFilm";

export default function FilmManagementPage() {
  const [filmList, setFilmList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalAddSchedule, setIsOpenModalAddSchedule] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [filmInfor, setFilmInfor] = useState(false);

  const fetchFilmList = async () => {
    let result = await movieService.getMovieList();
    let newList = result.data.content.map((film) => {
      return {
        ...film,
        action: {
          onDelete: () => {
            movieService
              .deleteMovie(film.maPhim)
              .then((res) => {
                message.success(res.data.content);
                fetchFilmList();
              })
              .catch((err) => {
                message.error(err.response.data.content);
              });
          },
          onEdit: () => {
            setIsOpenModalEdit(true);
            setFilmInfor(film);
          },
          onCreateNewSchedule: () => {
            setFilmInfor(film);
            setIsOpenModalAddSchedule(true);
          },
        },
      };
    });
    setFilmList(newList);
  };
  useEffect(() => {
    fetchFilmList();
  }, []);

  return (
    <div>
      <div className="flex justify-end py-4 px-8">
        <button
          className="py-2 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-200 text-base"
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          + Thêm phim
        </button>
      </div>
      <div>
        <FilmTable filmList={filmList} />
      </div>
      {isOpenModal && (
        <ModalAddNewFilm
          fetchFilmList={fetchFilmList}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
      {isOpenModalEdit && (
        <ModalEditFilm
          fetchFilmList={fetchFilmList}
          isOpenModalEdit={isOpenModalEdit}
          setIsOpenModalEdit={setIsOpenModalEdit}
          filmInfor={filmInfor}
        />
      )}
      {isOpenModalAddSchedule && (
        <ModalAddSchedule
          isOpenModalAddSchedule={isOpenModalAddSchedule}
          setIsOpenModalAddSchedule={setIsOpenModalAddSchedule}
          fetchFilmList={fetchFilmList}
          filmInfor={filmInfor}
        />
      )}
    </div>
  );
}
