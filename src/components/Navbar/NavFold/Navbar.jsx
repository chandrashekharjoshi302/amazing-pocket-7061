import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { FaRegUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import NavbarPopUpComponents from "../CatBar/NavbarPopUpComponents";
import { ShoppingBag } from "@mui/icons-material";
import { Route, Routes } from 'react-router-dom'
import MAIN from '../../../components/Profile/Main'
import Signin from "../../../logs/Signin";
const Navbar = () => {
  const navigate = useNavigate();
  const [howerState, setHowerState] = useState("");
  const [login, setLogin] = useState(false);
  const hoverHandler = (type) => {
    setHowerState(type);
  };
  const handleLogin = () => {
    if (login) {
      setLogin(false);
      localStorage.removeItem("user");
      localStorage.removeItem("oAuth");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("oAuth"));

    if (data) setLogin(true);
  }, []);
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png"
              className={style.card4}
              alt="nykka"
            />
            <p onClick={() => navigate("/products")}>Categories</p>
            <p onMouseOver={() => hoverHandler("BRANDS")}>Brands</p>
            <p onMouseEnter={() => hoverHandler("LUXE")}>Luxe</p>
            <p onMouseEnter={() => hoverHandler("NYKAA")}>Nykaa Fashion</p>
            <p onMouseEnter={() => hoverHandler("BEAUTY")}>Beauty Advice</p>
          </div>
          <div>
            <div className={style.inputContainer}>
              <input
                style={{ position: "relative" }}
                type="text"
                className={style.input}
                placeholder="Search on Nykaa"
              />
            </div>
            <div className={style.card2}>
              <p>
                <FaRegUser fontSize="2.5vh" cursor="pointer" />
              </p>
              <p onClick={() => handleLogin()}>{!login ? "Login" : "Logout"}</p>
            </div>
            <div className={style.card3}></div>
        
    <NavLink to="/profile/*">
            <ShoppingBag />
            </NavLink>
          </div>
        
        </div>

        <div className={style.content} onMouseLeave={() => setHowerState("")}>
          {howerState && <NavbarPopUpComponents type={howerState} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
