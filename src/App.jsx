import { useState } from "react";

import "./styles/global.css";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState("");

  const showTransactions = listTransactions.filter((trans) =>
    filter === "" ? true : trans.transactionType === filter
  );

  function handleLogin(event) {
    event.preventDefault();
    isLogin ? setIsLogin(false) : setIsLogin(true);
  }

  function cancelTransaction(index) {
    const transactions = listTransactions.filter((value, i) => index !== i);
    setListTransactions(transactions);
  }

  return (
    <div className="App">
      {!isLogin ? (
        <LandingPage handleLogin={handleLogin} />
      ) : (
        <Dashboard
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          filter={filter}
          setFilter={setFilter}
          showTransactions={showTransactions}
          handleLogin={handleLogin}
          cancelTransaction={cancelTransaction}
        />
      )}
    </div>
  );
}

export default App;
