var date = new Date();

export const validateName = (value) => {
  const erros = [];

  if (!value) {
    erros.push("Nome não pode ser vazio");
  }

  if (/\d/.test(value)) {
    erros.push("Nome não pode conter numeros");
  }

  return erros;
};

export const validateCardNumber = (value) => {
  const erros = [];

  if (!value) {
    erros.push("Cartão não pode ser vazio");
  }

  if (value.length !== 12) {
    erros.push("Cartão Tem que conter 12 digitos");
  }

  if (/[^\d]/g.test(value)) {
    erros.push("Cartão Não pode conter letras");
  }

  if (value === 111111111111) {
    erros.push("Cartão Com uma sequencia");
  }

  return erros;
};

export const validadeDate = (value) => {
  const erros = [];
  const dateFormat = value.split("/");
  const month = dateFormat[0];
  const year = dateFormat[1];
  const date_ = new Date(year, month - 1);

  if (!value) {
    erros.push("Data não pode ser vazio");
  }

  if (/^\/(\d{2})\/(\d{4})$/.test(value)) {
    erros.push("Data não pode conter letras");
  }

  if (date > date_) {
    erros.push("Data não pode ser menor que a atual");
  }

  if (month > 12 || month < 0) {
    erros.push("Data Invalida");
  }

  return erros;
};

export const validateCVV = (value) => {
  const erros = [];

  if (!value) {
    erros.push("CVV não pode ser vazio");
  }

  if (value.length !== 3) {
    erros.push("CVV deve conter 3 digitos");
  }

  return erros;
};

export const validateCPF = (value) => {
  const erros = [];

  if (!value) {
    erros.push("CPF não pode ser vazio");
  }

  if (value.length !== 11) {
    erros.push("CPF deve conter 11 digitos");
  }
  return erros;
};
