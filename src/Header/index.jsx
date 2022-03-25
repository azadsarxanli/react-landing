import React from "react";
import "../App.scss";
import "./Header.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Logo<span>.</span>
      </div>
      <nav className="sign-login">
        <a className="sign" href="/sign">
          Sign up
        </a>
        <div className="btn-round">Secondary</div>
      </nav>
    </header>
  );
};

export default Header;
