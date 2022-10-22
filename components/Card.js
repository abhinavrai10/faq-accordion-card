import React from "react";
import styles from "../styles/components/card.module.scss";

const card = (props) => {
  return (
      <div className={styles.card}>{props.children}</div>
  );
};

export default card;
