import React from "react";
import { useSelector } from "react-redux";
import LoginPage from "./LoginPage";
import UserManagePage from "./UserManagerPage";

export default function Dashboard() {
  let user = useSelector((state) => state.userSlice.user);
  return <div>{!user ? <LoginPage key={1} /> : <UserManagePage />}</div>;
}
