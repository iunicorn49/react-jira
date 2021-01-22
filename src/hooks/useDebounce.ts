import { useRef } from "react";

const useDebounce = (func: Function, delay = 1000) => {
  const timer = useRef<any>(null);
  if (timer.current) {
    clearTimeout(timer.current);
  } else {
    timer.current = setTimeout(() => {
      func();
    }, delay);
  }
};

export default useDebounce;
