import { useState, useRef } from "react";

export default function useScroll() {
  const [isScrollable, setIsScrollable] = useState(false);
  const mainRef = useRef(null);

  const checkScrollability = () => {
    const main = mainRef.current;
    if (main) {
      setIsScrollable(main.scrollHeight > main.clientHeight);
    }
  };

  const handleScroll = () => {
    const main = mainRef.current;
    if (main) {
      setIsScrollable(main.scrollTop === 0);
    }
  };

  const scrollToBottom = () => {
    const main = mainRef.current;
    if (main) {
      main.scrollTo({
        top: main.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return { checkScrollability, handleScroll, scrollToBottom, isScrollable, mainRef };
}
