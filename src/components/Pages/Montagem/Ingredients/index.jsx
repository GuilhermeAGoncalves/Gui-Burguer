import React, { Component } from "react";
import Button from "../../../Button";
import css from "./style.module.css";

export default class Ingredient extends Component {
  render() {
    const { ingredient } = this.props;

    const { title, subTitle, options } = ingredient;
    return (
      <>
        <div className={css.titles}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.subTitle}>{subTitle}</p>
        </div>
        <div className={css.listButton}>
          {options.map((el, i) => (
            <Button
              className={css.buttonList}
              onClick={this.props.onClick}
              key={i}
            >
              {el.type}
            </Button>
          ))}
        </div>
      </>
    );
  }
}
