// utils/performance.ts - Utility functions for performance optimization

// Type per funzioni generiche - usa never[] per evitare problemi di compatibilità
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

export function throttle<T extends AnyFunction>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: number | null = null;
  let lastExecTime = 0;

  return (...args: Parameters<T>) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

export function debounce<T extends AnyFunction>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: number | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func(...args), delay);
  };
}

export function rafThrottle<T extends AnyFunction>(
  func: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null;

  return (...args: Parameters<T>) => {
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
      func(...args);
      rafId = null;
    });
  };
}

/**
 * Utility to measure performance of a function
 */
export function measurePerformance<T>(
  fn: () => T,
  label: string = "Function"
): T {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${label} took ${(end - start).toFixed(2)}ms`);
  return result;
}

/**
 * Creates a frame rate limiter
 */
export function createFPSLimiter(targetFPS: number = 60) {
  const frameTime = 1000 / targetFPS;
  let lastTime = 0;

  return (callback: () => void): void => {
    const currentTime = performance.now();
    const elapsed = currentTime - lastTime;

    if (elapsed >= frameTime) {
      callback();
      lastTime = currentTime - (elapsed % frameTime);
    }
  };
}
