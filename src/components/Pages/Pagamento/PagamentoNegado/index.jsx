import React, { Component } from "react";
import Modal from "../../../Modal";
import css from "./style.module.css";
import TitleForm from "../../../TitleForm";

export default class PagamentoNegado extends Component {
  render() {
    return (
      <div>
        <Modal>
          <TitleForm className={css.modalTitle}>Pagamento Negado</TitleForm>
          <p className={css.modalContent}>
            Foi indentificado um erro no seu pagamento por favor tentar
            novamente
          </p>

          <button onClick={this.props.closeModal} className={css.button}>
            Me Desculpe
          </button>
        </Modal>
      </div>
    );
  }
}
