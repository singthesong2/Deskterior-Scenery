import { useEffect } from "react";

function useOnClickOutside(ref, handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler, enabled]);
}

export default useOnClickOutside;
