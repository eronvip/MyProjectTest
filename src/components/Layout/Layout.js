import React from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { MENU_LIST } from "../../utils/consts";

export const Layout = () => {
  return (
    <>
      <Header menu={MENU_LIST} />
      <Outlet />
    </>
  )
}