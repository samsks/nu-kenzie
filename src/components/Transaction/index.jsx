import "./style.css";
import { FaTrash } from "react-icons/fa";

const Transaction = ({
  description,
  transactionType,
  coinValue,
  index,
  cancelTransaction,
}) => {
  return (
    <li className="flex justify_between">
      <div
        className={`type_transaction ${
          transactionType === "Entrada" ? "entrada" : ""
        }`}
      ></div>

      <div
        id="description_transaction"
        className="flex direction_column justify_between"
      >
        <h2>{description}</h2>
        <span>{transactionType}</span>
      </div>
      <div id="value_transaction" className="flex justify_between gap27">
        <span>R$ {coinValue}</span>
        <button
          onClick={() => cancelTransaction(index)}
          className="btn_trash flex justify_center align_center"
        >
          <FaTrash id="iconTrash" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
