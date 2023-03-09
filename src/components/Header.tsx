import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  return (
    <div className="header">
      <div className="header-right">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/blurhashlazyloading">
          <p>blurhashlazyloading</p>
        </Link>
        <Link to="/reactlazyloading">
          <p>reactlazyloading</p>
        </Link>
        <Link to="/browserlazyloading">
          <p>browserlazyloading</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
