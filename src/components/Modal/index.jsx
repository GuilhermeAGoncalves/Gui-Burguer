import React, { Component } from "react";
import css from "./style.module.css";

export default class Modal extends Component {
  render() {
    return (
      <div className={css.modalWrapper}>
        <div className={css.modal}>{this.props.children}</div>
      </div>
    );
  }
}
