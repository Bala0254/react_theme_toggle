import { useEffect, useRef } from 'react';

/**
 * useInterval hook to run a callback at a fixed interval.
 * @param {Function} callback - Function to run
 * @param {number|null} delay - Delay in milliseconds. Pass `null` to stop it.
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Store latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up interval
  useEffect(() => {
    if (delay === null) return;

    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
