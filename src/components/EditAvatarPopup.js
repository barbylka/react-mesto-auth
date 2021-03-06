import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useValidation } from "../utils/validation";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef(null);
  const avatarValidate = useValidation(true);
  const saveButtonClassName = `popup__save-button 
  ${(avatarValidate.isWrong || (avatarRef.current.value === "")) && "popup__save-button_disabled"}`;

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__inputs">
        <label className="popup__field">
          <input
            ref={avatarRef}
            type="url"
            id="avatar-input"
            required
            placeholder="Ссылка на новый аватар"
            className="popup__text popup__text_type_avatar"
            onChange={avatarValidate.onBlur}
            name="avatar"
          />
          <span className="popup__text-error avatar-input-error">
            {avatarValidate.isWrong && avatarValidate.errorMessage}
          </span>
        </label>
      </fieldset>
      <button disabled={avatarValidate.isWrong || (avatarRef.current.value === "")} className={saveButtonClassName} type="submit">
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
