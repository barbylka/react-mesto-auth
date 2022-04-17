import React from "react";
import InfoTooltipPositive from "../images/InfoTooltipPositive.svg";
import InfoTooltipNegative from "../images/InfoTooltipNegative.svg";

export function InfoTooltip({ onClose, isOpen, isSucceed }) {
  const sectionClassName = `infoTooltip ${isOpen && "infoTooltip_opened"}`;

  return (
    <section className={sectionClassName} onClick={onClose}>
      <div className="infoTooltip__overlay"></div>
      <div className="infoTooltip__container">
        <button className="infoTooltip__exit-button" type="button" onClick={onClose}></button>
        {isSucceed ? (
          <>
            <img
              className="infoTooltip__img"
              src={InfoTooltipPositive}
              alt="Вы успешно зарегистрировались!"
            />
            <p className="infoTooltip__tip">Вы успешно зарегистрировались!</p>
          </>
        ) : (
          <>
            <img
              className="infoTooltip__img"
              src={InfoTooltipNegative}
              alt="Что-то пошло не так! Попробуйте ещё раз."
            />
            <p className="infoTooltip__tip">Что-то пошло не так! Попробуйте ещё раз.</p>
          </>
        )}
      </div>
    </section>
  );
}
