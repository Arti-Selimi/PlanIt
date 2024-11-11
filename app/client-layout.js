"use client";

import ArrowDown from "@/components/arrowDown/arrowDown";
import styles from "./client-layout.module.scss";
import { useEffect } from "react";
import useScroll from "@/components/hooks/scrollHook"

export default function ClientLayout({ children }) {
  const {
    checkScrollability,
    handleScroll,
    scrollToBottom,
    isScrollable,
    mainRef
  } = useScroll();

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    window.addEventListener("popstate", checkScrollability);

    const resizeObserver = new ResizeObserver(checkScrollability);
    const main = mainRef.current;
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
  }, []);

  return (
    <div className={styles.main} id="main" ref={mainRef}>
      {children}
      {isScrollable && (
        <div className={styles.arrowContainer}>
          <ArrowDown scrollToBottom={scrollToBottom} />
        </div>
      )}
    </div>
  );
}
