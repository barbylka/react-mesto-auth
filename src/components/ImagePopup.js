import React from "react";
import { Popup } from "./Popup";

function ImagePopup({ card, onClose }) {
  const popupClassName = `popup popup_type_pic ${card.link && "popup_opened"}`;
  const [isImageOpened, setIsImageOpened] = React.useState(false);

  React.useEffect(() => {
    if (card.link) {
      setIsImageOpened(true);
    } else {
      setIsImageOpened(false);
    }
  }, [card.link]);

  return (
    <Popup isOpen={isImageOpened} onClose={onClose}>
      <section className={popupClassName}>
        <div className="popup__overlay" onClick={onClose}></div>
        <div className="popup__pic-box">
          <button className="popup__exit-button" type="button" onClick={onClose}></button>
          <img className="popup__img" alt="полная версия выбранного фото" src={card.link} />
          <h2 className="popup__pic-title">{card.name}</h2>
        </div>
      </section>
    </Popup>
  );
}

export default ImagePopup;
