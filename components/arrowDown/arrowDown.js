import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./arrowDown.module.scss";

const ArrowDown = () => {

  return (
    <div className={styles.arrow}>
      <FontAwesomeIcon icon={faArrowDown} size="2x" />
    </div>
  );
};

export default ArrowDown;
