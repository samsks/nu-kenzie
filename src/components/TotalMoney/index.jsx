import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce(
    (acc, { coinValue }) => acc + coinValue,
    0
  );

  return (
    <section className="container section_total flex direction_column">
      <div className="flex justify_between align_center">
        <h3>Valor total:</h3>
        <span>R$ {total}</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </section>
  );
};

export default TotalMoney;
