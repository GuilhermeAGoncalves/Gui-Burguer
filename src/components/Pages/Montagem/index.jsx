import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../Header";
import { ingredients } from "../../Assets/Ingredients";
import Logo from "../../Logo";
import SelectedsIngredients from "../../SelectedsIngredients";
import TitleForm from "../../TitleForm";
import Ingredient from "./Ingredients";
import css from "./style.module.css";

export default class Montagem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexPage: 0,
      finalPage: 4,
      pages: ["bread", "beef", "cheese", "salad", "complement"],

      setBread: "",
      setBeef: "",
      setCheese: "",
      setSalads: "",
      setComplements: "",
      price: 0,

      redirectProxPage: false,
      redirecionarPagamento: false,
    };

    this.proximaPage = this.proximaPage.bind(this);
    this.setIngrient = this.setIngrient.bind(this);
    this.redirecionarToPagamento = this.redirecionarToPagamento.bind(this);
  }

  proximaPage() {
    if (this.state.redirectProxPage) {
      this.setState({ indexPage: this.state.indexPage + 1 });
      this.setState({
        redirectProxPage: false,
      });
    }
  }

  redirecionarToPagamento(data) {
    if (this.state.setComplements !== "") {
      console.log(this.state.redirecionarPagamento);
      this.setState({ redirecionarPagamento: true, price: data });
    }
  }

  setIngrient($event) {
    const { indexPage, pages } = this.state;
    switch (pages[indexPage]) {
      case "bread":
        this.setState({
          setBread: $event.target.innerText,
          redirectProxPage: true,
        });
        break;
      case "beef":
        this.setState({
          setBeef: $event.target.innerText,
          redirectProxPage: true,
        });
        break;
      case "cheese":
        this.setState({
          setCheese: $event.target.innerText,
          redirectProxPage: true,
        });
        break;
      case "salad":
        this.setState({
          setSalads: $event.target.innerText,
          redirectProxPage: true,
        });
        break;
      case "complement":
        this.setState({
          setComplements: $event.target.innerText,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { indexPage, finalPage, pages } = this.state;

    const pageIngredient = ingredients.filter(
      (e) => e.ingredient === pages[indexPage]
    );

    if (this.state.redirecionarPagamento) {
      return (
        <Redirect
          to={{
            pathname: "/pagamento",
            state: {
              bread: this.state.setBread,
              beef: this.state.setBeef,
              cheese: this.state.setCheese,
              salads: this.state.setSalads,
              complements: this.state.setComplements,
              price: this.state.price,
            },
          }}
        ></Redirect>
      );
    }

    return (
      <>
        <Header>Monte Seu Sanduíche</Header>

        <main className={css.app}>
          <div className={css.left}>
            <Logo>Logo</Logo>
            <div>
              <Ingredient
                ingredient={pageIngredient[0]}
                onClick={this.setIngrient}
              />
            </div>
          </div>

          <article className={css.right}>
            <TitleForm>Ingredientes Selecionados:</TitleForm>
            <SelectedsIngredients
              bread={this.state.setBread}
              beef={this.state.setBeef}
              cheese={this.state.setCheese}
              salads={this.state.setSalads}
              complements={this.state.setComplements}
              price={this.state.price}
              getPrice={this.getPrice}
              pageAtual={indexPage}
              pageFinal={finalPage}
              proximaPage={this.proximaPage}
              fazerPagamento={this.redirecionarToPagamento}
            />
          </article>
        </main>
      </>
    );
  }
}
