import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./View/Login/Login";
import ToDoList from "./View/ToDoList/ToDoList";
import AboutUs from "./View/AboutUs/AboutUs";

const RequireAuth = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("auth");
  return isAuthenticated ? children : <Navigate to='/' />;
};

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("auth")
  );

  return (
    <Routes>
      <Route
        index
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route path='/about' element={<AboutUs />} />
      <Route
        path='/todolist'
        element={
          <RequireAuth>
            <ToDoList />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
