import "./style.css";

import EmptyCard from "../../assets/img/NoCard.svg";
import Transactions from "../Transaction";
import FilterTransactions from "./filterTransacitions";

const List = ({ showTransactions, cancelTransaction, filter, setFilter }) => {
  return (
    <section id="section_values">
      <FilterTransactions filter={filter} setFilter={setFilter} />

      {showTransactions.length ? (
        <ul id="ul_transactions" className="flex direction_column gap32">
          {showTransactions.map(
            ({ description, transactionType, coinValue }, index) => (
              <Transactions
                key={index}
                description={description}
                transactionType={transactionType}
                coinValue={coinValue}
                index={index}
                cancelTransaction={cancelTransaction}
              />
            )
          )}
        </ul>
      ) : (
        <div id="div_empty" className="flex direction_column gap33">
          <p>Nenhum lançamento encontrado</p>

          <img src={EmptyCard} alt="" />

          <img src={EmptyCard} alt="" />

          <img src={EmptyCard} alt="" />
        </div>
      )}
    </section>
  );
};

export default List;
