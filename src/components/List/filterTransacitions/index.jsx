import React from "react";
import "./style.css";

const FilterTransactions = ({ filter, setFilter }) => {
  return (
    <div className="menu_options flex justify_between align_center">
      <h3 className="flexNone">Resumo financeiro</h3>
      <div className="flex align_center justify_between gap16">
        <button
          type="button"
          className={`btnSec ${filter === "" ? "active" : ""}`}
          onClick={() => setFilter("")}
        >
          Todos
        </button>
        <button
          type="button"
          className={`btnSec ${filter === "Entrada" ? "active" : ""}`}
          onClick={() => setFilter("Entrada")}
        >
          Entradas
        </button>
        <button
          type="button"
          className={`btnSec ${filter === "Despesa" ? "active" : ""}`}
          onClick={() => setFilter("Despesa")}
        >
          Despesas
        </button>
      </div>
    </div>
  );
};

export default FilterTransactions;
