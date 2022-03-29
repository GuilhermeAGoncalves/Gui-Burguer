import React, { Component } from "react";
import css from "./style.module.css";

export default class Header extends Component {
  render() {
    return (
      <header className={css.header} {...this.props}>
        <h1 className={css.headerContent}>{this.props.children}</h1>
      </header>
    );
  }
}
