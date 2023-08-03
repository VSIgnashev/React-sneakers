import React from "react";

import AppContext from "../../contex";
import styles from "./Info.module.scss";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className={styles.cartEmpty}>
      <img width={120} height={120} src={image} />
      <h3 className={styles.headerEmpty}>{title}</h3>
      <p className={styles.pEmpty}>{description}</p>
      <button
        onClick={() => setCartOpened(false)}
        className={styles.returnButton}
      >
        <img
          className={styles.returnButtonArrow}
          src="../img/return_button_arrow.svg"
        />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
