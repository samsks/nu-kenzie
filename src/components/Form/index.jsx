import { useState } from "react";
import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [coinValue, setCoinValue] = useState(0);
  const [transactionType, setTransactionType] = useState("Entrada");

  const addTransaction = (event) => {
    event.preventDefault();

    if (transactionType === "Entrada") {
      const newTransaction = {
        description,
        transactionType,
        coinValue: +coinValue,
      };
      setListTransactions([...listTransactions, newTransaction]);
    } else {
      const newTransaction = {
        description,
        transactionType,
        coinValue: -coinValue,
      };
      setListTransactions([...listTransactions, newTransaction]);
    }
  };

  return (
    <form
      onSubmit={addTransaction}
      className="container form_operations flex direction_column align_center"
    >
      <div className="div_description flex direction_column">
        <label htmlFor="inputDescription">Descrição</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          className="input"
          placeholder="Digite aqui sua descrição"
          name="inputDescription"
          type="text"
          value={description}
          required
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div className="div_insertValor flex justify_between">
        <div className="div_insertValor_valor flex direction_column gap9">
          <label className="label_input_value" htmlFor="">
            Valor
          </label>
          <input
            onChange={(event) => setCoinValue(event.target.value)}
            className="input_value"
            placeholder={"0"}
            type="number"
            min="1"
            required
          />
        </div>
        <div className="div_insertValor_type flex direction_column gap9">
          <label className="label_input_value" htmlFor="">
            Tipo de valor
          </label>
          <select
            onChange={(event) => setTransactionType(event.target.value)}
            className="select"
            name=""
            id="appearance-select"
            required
          >
            <option className="option" value="Entrada">
              Entrada
            </option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button className="btn_primary" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
