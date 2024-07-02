import { useState } from "react";
import styles from "./ButtonMode.module.css";
import { faCircleXmark, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonMode() {
  const [active, setStateActive] = useState(false);
  const [count, setStateCount] = useState(0);

  return (
    <div
      className={`${styles["mode"]} ${active ? styles["mode--active"] : ""}`}
      onClick={() => {
        setStateActive(!active);
        setStateCount(count + 1);
      }}
    >
      <div className={`${styles["mode__circle"]}`}>
        {active ? <FontAwesomeIcon icon={faCircleCheck} /> : <FontAwesomeIcon icon={faCircleXmark} />}
      </div>
      <span className={`${styles["mode__count"]}`}>{count}</span>
    </div>
  );
}
export default ButtonMode;
