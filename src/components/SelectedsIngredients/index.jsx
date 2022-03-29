import React, { Component } from "react";
import { ingredients } from "../Assets/Ingredients";
import Button from "../Button";
import css from "./style.module.css";

export default class SelectedsIngredients extends Component {
  constructor() {
    super();

    this.getCountItem = this.getCountItem.bind(this);
  }

  getCountItem(arr) {
    const countMap = Object.create(null);

    for (const element of arr) {
      countMap[element] = (countMap[element] || 0) + 1;
    }

    return Object.entries(countMap).map(([value, count]) => ({
      type: value,
      amount: count,
    }));
  }

  render() {
    const {
      bread,
      beef,
      cheese,
      salads,
      complements,
      pageAtual,
      pageFinal,
      proximaPage,
      fazerPagamento,
    } = this.props;
    let { price } = this.props;

    /*Não gostei dessa parte do meu codigo muito 
    repetitivo e não consegui pensar numa maneira de selecionar mais de uma
     ;-; */
    const getBreadOptions = ingredients
      .filter((element) => element.ingredient === "bread")
      .map((el) => el.options);
    const getBread = getBreadOptions[0].filter((e) => e.type === bread);

    const getBeefOptions = ingredients
      .filter((element) => element.ingredient === "beef")
      .map((el) => el.options);
    const getBeef = getBeefOptions[0].filter((e) => e.type === beef);

    const getCheeseOptions = ingredients
      .filter((element) => element.ingredient === "cheese")
      .map((el) => el.options);
    const getCheese = getCheeseOptions[0].filter((e) => e.type === cheese);

    const getSaladsOptions = ingredients
      .filter((element) => element.ingredient === "salad")
      .map((el) => el.options);
    const getSalad = getSaladsOptions[0].filter((e) => e.type === salads);

    const getComplementOptions = ingredients
      .filter((element) => element.ingredient === "complement")
      .map((el) => el.options);
    const getComplement = getComplementOptions[0].filter(
      (e) => e.type === complements
    );

    if (bread) {
      price = getBread[0].price + price;
    }
    if (beef) {
      price = price + getBeef[0].price;
    }
    if (cheese) {
      price = price + getCheese[0].price;
    }
    if (salads) {
      price = price + getSalad[0].price;
    }
    if (complements) {
      price = price + getComplement[0].price;
    }
    console.log(price);

    return (
      <>
        <ul className={css.listIngredients}>
          {bread && <li>Pão: {getBread[0].type}</li>}
          {beef && <li>Carne: {getBeef[0].type}</li>}
          {cheese && <li>Queijo: {getCheese[0].type}</li>}
          {salads && <li>Salada: {getSalad[0].type}</li>}
          {complements && <li>Complemento: {getComplement[0].type}</li>}
        </ul>

        <h1 className={css.preco}>{price > 0 && `Total: R$${price}`}</h1>

        <div className={css.button}>
          {pageAtual < pageFinal ? (
            <Button onClick={proximaPage}>Proseguir</Button>
          ) : (
            <Button onClick={() => fazerPagamento(price)}>
              Fazer Pagemento
            </Button>
          )}
        </div>
      </>
    );
  }
}
