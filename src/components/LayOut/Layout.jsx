import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
