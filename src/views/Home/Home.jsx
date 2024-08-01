import React from "react";
import Styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";

const Home = () => {
  const navigate = useNavigate();
  const { user, signIn } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.elements.username.value;

    signIn(username, () => navigate("/admin"));
  };

  if (user) {
    return (
      <div className={Styles.homeContainer}>
        <h1>Home Page</h1>
        <p>Welcome back, {user}!</p>
      </div>
    );
  }

  return (
    <div className={Styles.homeContainer}>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          UserName:
          <input type='text' id='username' name='username' />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Home;
