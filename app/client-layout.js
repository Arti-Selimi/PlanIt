"use client";

import ArrowDown from "@/components/arrowDown/arrowDown";
import styles from "./client-layout.module.scss";
import { useEffect, useState, useRef } from "react";

export default function ClientLayout({ children }) {
  const [isScrollable, setIsScrollable] = useState(false);
  const mainRef = useRef(null);

  const checkScrollability = () => {
    if (mainRef.current) {
      const { scrollHeight, clientHeight } = mainRef.current;
      setIsScrollable(scrollHeight > clientHeight);
    }
  };

  const handleScroll = () => {
    if (mainRef.current) {
      const scrollLocation = mainRef.current.scrollTop
      if(scrollLocation != 0) {
        setIsScrollable(false)
      } else {
        setIsScrollable(true)
      }
    }
  };

  const scrollToBottom = () => {
    mainRef.current.scrollTo({
      top: mainRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    window.addEventListener("popstate", checkScrollability);

    const resizeObserver = new ResizeObserver(checkScrollability);
    if (mainRef.current) {
      resizeObserver.observe(mainRef.current);
      mainRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("resize", checkScrollability);
      window.removeEventListener("popstate", checkScrollability);
      if (mainRef.current) {
        resizeObserver.unobserve(mainRef.current);
        mainRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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
