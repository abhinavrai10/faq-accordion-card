import React from "react";
import Image from "next/image";
import styles from "../styles/components/ImageContainer.module.scss";
import box_path from "../public/images/illustration-box-desktop.svg";

const image_container = () => {
  return (
    <section className="image_container">
      <article className="bg-img">
        <div className="picture_container">
          <picture>
            <source
              media="(max-width:960px)"
              srcSet="/images/illustration-woman-online-mobile.svg"
            />
            <img
              src="/images/illustration-woman-online-desktop.svg"
              alt="woman-online"
              className={styles.woman}
            />
          </picture>
        </div>
        <div className={styles.box_container}>
          <Image src={box_path} alt="box" layout="fill" />
        </div>
      </article>
    </section>
  );
};

export default image_container;
