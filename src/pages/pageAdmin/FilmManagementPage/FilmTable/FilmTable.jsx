import { Space, Table, Tag } from "antd";
import React from "react";
import { headerFilmTable } from "../../../../Utils/filmManagement.utils";

const FilmTable = ({ filmList }) => (
  <Table columns={headerFilmTable} dataSource={filmList} scroll={{ y: 400 }} />
);

export default FilmTable;
