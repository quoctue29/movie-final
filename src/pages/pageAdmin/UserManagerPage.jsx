import React, { useEffect, useState } from "react";
import { getUserServ } from "../../services/userServices";
import TableUser from "./TableUser";
import { useSelector } from "react-redux";
import LoginPage from "./LoginPage";
import ModalAddNewAccount from "./ModalAddNewAccount";
import { localService } from "../../services/localService";
import { message } from "antd";
import ModalEditAccount from "./ModalEditAccount";

export default function UserManagePage() {
  const [listUser, setListUser] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [update, setUpdate] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [editUserInfo, setEditUserInfo] = useState({});
  const [isOpenModalModify, setOpenModalModify] = useState(false);

  const fetchUserList = () => {
    getUserServ
      .getUserList()
      .then((res) => {
        let dataRaw = res.data.content.map((userInfor) => {
          return {
            ...userInfor,
            action: {
              onDelete: () => {
                getUserServ
                  .deleteUserInfor(userInfor.taiKhoan)
                  .then((res) => {
                    fetchUserList();
                    message.success(res.data.content);
                  })
                  .catch((err) => {
                    message.error(err.response.data.content);
                  });
              },
              onEdit: () => {
                setOpenModalModify(true);
                setEditUserInfo(userInfor);
              },
            },
          };
        });

        setListUser(dataRaw);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchUserList();
  }, [update]);
  const handleAddNewAccount = () => {
    setIsOpenModal(true);
  };
  const handleInputChange = (e) => {
    if (e.target.value != "") {
      setSearchInput(e.target.value);
    } else if (e.target.value == "") {
      setUpdate(Math.random());
    }
  };
  const handleSearch = () => {
    const fetchUserInfor = async () => {
      let result = await getUserServ.getSearchUserInfor(searchInput);
      let searchDataRaw = result.data.content.map((userInfor) => {
        return {
          ...userInfor,
          action: {
            onDelete: () => {
              getUserServ
                .deleteUserInfor(userInfor.taiKhoan)
                .then((res) => {
                  fetchUserList();
                  message.success(res.data.content);
                })
                .catch((err) => {
                  message.error(err.response.data.content);
                });
            },
            onEdit: () => {
              setOpenModalModify(true);
              setEditUserInfo(userInfor);
            },
          },
        };
      });
      setListUser(searchDataRaw);
    };
    fetchUserInfor();
  };
  return (
    <div>
      <div className="container mx-auto" key={2}>
        <div className="flex justify-between py-4 px-8">
          <button
            className="py-2 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-200 text-base"
            onClick={() => {
              handleAddNewAccount();
            }}
          >
            + Thêm người dùng
          </button>
          <div className="flex w-1/2">
            <input
              className="w-3/4 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-tl-lg rounded-bl-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Nhập từ khóa"
              type="text"
              name="search"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <button
              className="w-1/4 py-2 px-3 bg-blue-500 text-white rounded-tr-lg rounded-br-lg hover:bg-blue-700 transition duration-200 text-base"
              onClick={() => {
                handleSearch();
              }}
            >
              Tìm kiếm
            </button>
          </div>
        </div>
        <TableUser listUser={listUser} />
        {isOpenModal && (
          <ModalAddNewAccount
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            setUpdate={setUpdate}
          />
        )}
        {isOpenModalModify && (
          <ModalEditAccount
            editUserInfo={editUserInfo}
            isOpenModalModify={isOpenModalModify}
            setOpenModalModify={setOpenModalModify}
            setUpdate={setUpdate}
          />
        )}
      </div>
    </div>
  );
}
