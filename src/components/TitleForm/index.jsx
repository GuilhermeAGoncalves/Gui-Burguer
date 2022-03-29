import React, { Component } from "react";
import css from "./style.module.css";

export default class TitleForm extends Component {
  render() {
    return (
      <p className={`${css.destaque} ${this.props.className}`}>
        {this.props.children}
      </p>
    );
  }
}
