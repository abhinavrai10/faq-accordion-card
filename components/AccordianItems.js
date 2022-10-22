import React, { useState } from "react";
import Image from "next/image";
import path from "../public/images/icon-arrow-down.svg";
import styles from "../styles/components/accordion-items.module.scss";

const AccordianItems = (props) => {
    const [toggle, setToggle]= useState(false)
    const clickHanler = () => { setToggle(prev => !prev) }
    
    const ansClass = toggle ? styles.accordion__ans__visible : styles.accordion__ans;
    const iconClass = toggle ? styles.icon__container__active : styles.icon__container;
    const buttonClass = toggle ? styles.btn__active : styles.btn;

  return (
    <div className={styles.accordion__items}>
        <button className={buttonClass} onClick={clickHanler}>
          {props.quest}
          <div className={iconClass}>
            <Image src={path} layout="fill" />
          </div>
        </button>
      <div className={ansClass}>{props.ans}</div>
    </div>
  );
};

export default AccordianItems;
