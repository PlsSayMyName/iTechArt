/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

const useDetectOutsideClick = (el: any, initialState: any) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (el.current !== null && !el.current.contains(e.target as Node)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active, then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    // unset event listener once the dropdown is closed
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

export default useDetectOutsideClick;
