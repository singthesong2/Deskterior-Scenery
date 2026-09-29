import { useCallback, useEffect, useRef } from "react";

function useDebounce(callback, delay = 300) {
  const timeoutRef = useRef(null);
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const debounce = useCallback(
    (...args) => {
      cancel();

      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay, cancel],
  );

  useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  return {
    debounce,
    cancel,
  };
}

export default useDebounce;
