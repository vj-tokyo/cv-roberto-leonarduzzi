// utils/performance.ts - Utility functions for performance optimization

// ✅ FIXED - Tipi specifici invece di any
type VoidFunction = (...args: unknown[]) => void;

export function throttle<T extends VoidFunction>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: number | null = null; // ✅ FIXED - number invece di NodeJS.Timeout
  let lastExecTime = 0;

  return (...args: Parameters<T>) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        // ✅ FIXED - window.setTimeout per browser
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

export function debounce<T extends VoidFunction>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: number | null = null; // ✅ FIXED - number invece di NodeJS.Timeout

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func(...args), delay); // ✅ FIXED - window.setTimeout
  };
}

export function rafThrottle<T extends VoidFunction>(
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
