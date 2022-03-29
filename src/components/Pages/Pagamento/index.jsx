import React, { Component } from "react";
import PagamentoConcluido from "./PagamentoConcluido";
import PagamentoNegado from "./PagamentoNegado";
import Logo from "../../Logo";
import Header from "../../Header";
import Input from "../../Input";
import {
  validateName,
  validateCardNumber,
  validadeDate,
  validateCVV,
  validateCPF,
} from "../../Assets/validade";
import css from "./style.module.css";
import TitleForm from "../../TitleForm";

export default class Pagamento extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      card: "",
      modal: false,
      validations: {
        name: { isDirty: false, erros: [] },
        card: { isDirty: false, erros: [] },
        date: { isDirty: false, erros: [] },
        CVV: { isDirty: false, erros: [] },
        CPF: { isDirty: false, erros: [] },
      },
      validate: false,
    };

    this.pagar = this.pagar.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.validateComponent = this.validateComponent.bind(this);
  }

  pagar() {
    const { validations } = this.state;
    if (
      validations.name.isDirty &&
      validations.card.isDirty &&
      validations.date.isDirty &&
      validations.CVV.isDirty &&
      validations.CPF.isDirty &&
      validations.name.erros.length === 0 &&
      validations.card.erros.length === 0 &&
      validations.date.erros.length === 0 &&
      validations.CVV.erros.length === 0 &&
      validations.CPF.erros.length === 0
    ) {
      this.setState({ validate: true });
      console.log("Tudo certo");
    } else {
      this.setState({ validate: false });
      console.log("tudo errado");
    }
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
  }

  validateComponent($event) {
    const { validations } = this.state;
    const { id, value } = $event.target;
    let erros;

    switch (id) {
      case "name":
        erros = validateName(value);
        this.setState({ name: value });
        break;
      case "card":
        erros = validateCardNumber(value);
        console.log(value.length);
        this.setState({ card: value });
        break;
      case "date":
        erros = validadeDate(value);
        break;
      case "CVV":
        erros = validateCVV(value);
        break;
      case "CPF":
        erros = validateCPF(value);
        break;
      default:
        erros = [];
    }

    validations[id].isDirty = true;
    validations[id].erros = erros;
    this.setState({ validations });
  }

  render() {
    const { bread, beef, cheese, salads, complements, price } =
      this.props.location.state;
    const { modal, validate, validations } = this.state;
    return (
      <>
        <Header>Pague Seu Sanduiche</Header>
        <main className={css.app}>
          <div className={css.left}>
            <Logo />

            <p className={css.agradecimento}>Obrigado pela preferencia!!</p>

            <div className={css.resume}>
              <div className={css.resumeContent}>
                <h2 className={css.destaque}>Resumo do pedido:</h2>
                <p>Pão: {bread}</p>
                <p>Carne: {beef}</p>
                <p>Queijo: {cheese}</p>
                <p>Saladas: {salads}</p>
                <p>Complementos: {complements}</p>
                <p className={css.destaque}>Total: R${price}</p>
              </div>
            </div>
          </div>

          <div className={css.right}>
            <TitleForm>Insira Os Dados Do Pagamento:</TitleForm>

            <div className={css.form}>
              <div className={css.inputComplet}>
                <label htmlFor="name">Nome:</label>
                <Input
                  placeholder="Seu Nome Completo"
                  id="name"
                  onBlur={this.validateComponent}
                />
                <p className={css.messageErro}>
                  {validations.name.isDirty && validations.name.erros[0]}
                </p>
              </div>

              <div className={css.inputComplet}>
                <label htmlFor="card">Número Do Cartão:</label>
                <Input
                  placeholder="Somente Números"
                  id="card"
                  onBlur={this.validateComponent}
                />
                <p className={css.messageErro}>
                  {validations.card.isDirty && validations.card.erros[0]}
                </p>
              </div>

              <div className={css.inputHalf}>
                <div className={css.inputDate}>
                  <label htmlFor="date">Data De Validade:</label>
                  <Input
                    placeholder="MM/YYYY"
                    id="date"
                    onBlur={this.validateComponent}
                  />
                  <p className={css.messageErro}>
                    {validations.date.isDirty && validations.date.erros[0]}
                  </p>
                </div>

                <div className={css.inputCVV}>
                  <label htmlFor="CVV">CVV:</label>
                  <Input
                    placeholder="3 Dígitos"
                    id="CVV"
                    onBlur={this.validateComponent}
                  />
                  <p className={css.messageErro}>
                    {validations.CVV.isDirty && validations.CVV.erros[0]}
                  </p>
                </div>
              </div>

              <div className={css.inputComplet}>
                <label htmlFor="CPF">CPF:</label>
                <Input
                  placeholder="Somente Números"
                  id="CPF"
                  onBlur={this.validateComponent}
                />
                <p className={css.messageErro}>
                  {validations.CPF.isDirty && validations.CPF.erros[0]}
                </p>
              </div>
            </div>

            <button onClick={this.pagar} className={css.button}>
              Fazer pagamento
            </button>
          </div>
          <div className="modal">
            {modal ? (
              validate ? (
                <PagamentoConcluido
                  closeModal={this.closeModal}
                  client={this.state.name}
                  cardNumber={this.state.card}
                />
              ) : (
                <PagamentoNegado closeModal={this.closeModal} />
              )
            ) : (
              ""
            )}
          </div>
        </main>
      </>
    );
  }
}
