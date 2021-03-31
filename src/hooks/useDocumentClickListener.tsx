import { useState, useEffect } from "react";

const useDocumentClickListener = () => {
  const [e, setE] = useState<MouseEvent | null>(null);

  const updateE = (e: MouseEvent) => {
    setE(e);
  };

  useEffect(() => {
    document.addEventListener("click", updateE);

    return () => document.removeEventListener("click", updateE);
  }, []);

  return { e };
};

export default useDocumentClickListener;
