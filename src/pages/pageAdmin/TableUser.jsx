import { Space, Table, Tag } from "antd";
import React from "react";
import { headerTableUser } from "../../Utils/userManagement.utils";

const TableUser = ({ listUser }) => (
  <Table columns={headerTableUser} dataSource={listUser} />
);

export default TableUser;
