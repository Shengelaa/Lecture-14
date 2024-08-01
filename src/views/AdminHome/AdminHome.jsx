import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./AdminHome.module.css";


const AdminHome = () => {
  const navigate = useNavigate();

  const handleSignout = () => {

    navigate("/"); 
  };

  return (
    <div className={Styles.container}>
      AdminHome
      <button onClick={handleSignout}>Signout</button>
    </div>
  );
};

export default AdminHome;
