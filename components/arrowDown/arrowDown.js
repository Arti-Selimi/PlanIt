"use client"

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./arrowDown.module.scss";

const ArrowDown = ({scrollToBottom}) => {

  return (
    <div className={styles.arrow} onClick={scrollToBottom}>
      <FontAwesomeIcon icon={faArrowDown} size="2x"/>
    </div>
  );
};

export default ArrowDown;
