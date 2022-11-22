import React from "react";

import Form from "../../components/Form";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";

import logoLight from "../../assets/img/Nu_Kenzie.svg";

const Dashboard = ({
  listTransactions,
  setListTransactions,
  filter,
  setFilter,
  showTransactions,
  handleLogin,
  cancelTransaction,
}) => {
  return (
    <div className="dashboard">
      <header className="">
        <div className="container flex justify_between align_center">
          <img src={logoLight} alt="" />
          <button onClick={handleLogin} className="btn_secundary btnSec">
            Início
          </button>
        </div>
      </header>
      <div className="container page_content flex direction_column">
        <section
          id="section_entries"
          className="flex direction_columnReverse gap16 section__forForm"
        >
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <List
          showTransactions={showTransactions}
          filter={filter}
          setFilter={setFilter}
          cancelTransaction={cancelTransaction}
        />
      </div>
    </div>
  );
};

export default Dashboard;
