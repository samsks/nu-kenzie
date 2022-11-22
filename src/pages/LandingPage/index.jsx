import React from "react";

import logoDark from "../../assets/img/Nu_Kenzie_w.svg";
import initialPicture from "../../assets/img/result2AnimatedCSS.svg";

const LandingPage = ({ handleLogin }) => {
  return (
    <div className="pagInitial flex justify_center align_center">
      <div className="div_nu_initial flex direction_column gap28">
        <img src={logoDark} alt="" />
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <button onClick={handleLogin} className="btn_primary">
          Iniciar
        </button>
      </div>
      <img id="svgHome" className="flexNone" src={initialPicture} alt="" />
    </div>
  );
};

export default LandingPage;
