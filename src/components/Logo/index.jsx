import React, { Component } from "react";
import css from "./style.module.css";
import logo from "../Assets/Images/logo.png";

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} className={css.logo} alt="Logo em forma de Sanduíche" />
      </div>
    );
  }
}
