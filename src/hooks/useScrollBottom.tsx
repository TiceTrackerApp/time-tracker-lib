import { useEffect, useState } from "react";

const useScrollBottom = () => {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  const checkIfScrolledToBottom = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // you're at the bottom of the page
      setScrolledToBottom(true);
      return true;
    } else {
      setScrolledToBottom(false);
      return false;
    }
  };

  useEffect(() => {
    checkIfScrolledToBottom();
    window.addEventListener("scroll", checkIfScrolledToBottom);
  }, []);

  return { scrolledToBottom, checkIfScrolledToBottom };
};

export default useScrollBottom;
