import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/LayOut/Layout";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import AdminHome from "./views/AdminHome/AdminHome";
import UserHome from "./views/UserHome/UserHome";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='about-us' element={<Navigate to={"/about"} />} />
        <Route path='admin' element={<AdminHome />} />
        <Route path='user' element={<UserHome />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
