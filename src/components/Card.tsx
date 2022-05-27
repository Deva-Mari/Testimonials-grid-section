import styles from "../css/Card.module.css";
import React, { useState } from "react";

const Card: React.FC<{
  id: number;
  name: string;
  picture: string;
  function: string;
  blurb: string;
  quote: string;
  background: string;
}> = (props) => {
  // importing client image conditionally
  const [clientImage, setClientImage] = useState("");
  let imgName = props.picture;
  import(`../assets/${imgName}`).then((image) => setClientImage(image.default));

  return (
    <div
      // classNames based on props
      className={`${styles.card} ${styles[props.background]} ${
        styles[`id` + props.id]
      }`}
    >
      <div className={styles.header}>
        <img src={clientImage} alt={props.name} />
        <div>
          <h2>{props.name}</h2>
          <p>{props.function}</p>
        </div>
      </div>
      <p className={styles.blurb}>{props.blurb}</p>
      <p className={styles.quote}>
        <i>" </i>
        {props.quote} <i>"</i>
      </p>
    </div>
  );
};

export default Card;
