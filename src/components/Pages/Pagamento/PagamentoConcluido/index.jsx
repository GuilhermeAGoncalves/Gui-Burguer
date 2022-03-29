import React, { Component } from "react";
import Modal from "../../../Modal";
import TitleForm from "../../../TitleForm";
import css from "./style.module.css";

export default class PagamentoConcluido extends Component {
  render() {
    console.log(this.props);

    let arr = this.props.cardNumber.split("");
    console.log(arr);
    let {
      length,
      0: fist,
      [length - 3]: antLast,
      [length - 2]: penLast,
      [length - 1]: last,
    } = arr;

    console.log(antLast);
    console.log(penLast);
    console.log(last);
    return (
      <div>
        <Modal>
          <TitleForm className={css.modalTitle}>
            Pagamento Concluido Com Sucesso
          </TitleForm>
          <p className={css.modalContent}>
            Ola, muito obrigado pela compra, {this.props.client}, sua compra foi
            computada no cartão de final [{antLast},{penLast},{last}]
          </p>
          <button onClick={this.props.closeModal} className={css.button}>
            OK
          </button>
        </Modal>
      </div>
    );
  }
}
