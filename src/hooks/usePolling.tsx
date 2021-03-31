import { useEffect, useRef } from "react";

const usePolling = (endpoint: string, intervalMs: number) => {
  const interval = useRef<any>();

  const fetchEndpoint = async () => {
    fetch(endpoint);
  };

  useEffect(() => {
    interval.current = setInterval(fetchEndpoint, intervalMs);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return null;
};

export default usePolling;
