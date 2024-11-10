"use client";

import ArrowDown from "@/components/arrowDown/arrowDown";
import styles from "./client-layout.module.scss";
import { useEffect, useState, useRef } from "react";

export default function ClientLayout({ children }) {
  const [isScrollable, setIsScrollable] = useState(false);
  const mainRef = useRef(null);
  const main = mainRef.current

  const checkScrollability = () => {
    if (main) {
      const { scrollHeight, clientHeight } = main;
      setIsScrollable(scrollHeight > clientHeight);
    }
  };

  const handleScroll = () => {
    const scrollLocation = main.scrollTop
    if (main) {
      if(scrollLocation != 0) {
        setIsScrollable(false)
      } else {
        setIsScrollable(true)
      }
    }
  };

  const scrollToBottom = () => {
    main.scrollTo({
      top: main.scrollHeight,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    window.addEventListener("popstate", checkScrollability);

    const resizeObserver = new ResizeObserver(checkScrollability);
    if (main) {
      resizeObserver.observe(main);
      main.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("resize", checkScrollability);
      window.removeEventListener("popstate", checkScrollability);
      if (main) {
        resizeObserver.unobserve(main);
        main.removeEventListener("scroll", handleScroll);
      }
    };
  });

  return (
    <div className={styles.main} id="main" ref={mainRef}>
      {children}
      {isScrollable && (
        <div className={styles.arrowContainer} >
          <ArrowDown scrollToBottom={scrollToBottom}/>
        </div>
      )}
    </div>
  );
}
