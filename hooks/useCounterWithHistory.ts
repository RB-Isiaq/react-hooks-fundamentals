"use client";

import { useState, useCallback } from "react";

export function useCounterWithHistory(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState<number[]>([initialValue]);

  const increment = useCallback(() => {
    const newValue = count + 1;
    setCount(newValue);
    setHistory((prevHistory) => [...prevHistory, newValue]);
  }, [count]);

  const decrement = useCallback(() => {
    const newValue = count - 1;
    setCount(newValue);
    setHistory((prevHistory) => [...prevHistory, newValue]);
  }, [count]);

  const reset = useCallback(() => {
    setCount(initialValue);
    setHistory([initialValue]);
  }, [initialValue]);

  return { count, history, increment, decrement, reset };
}
