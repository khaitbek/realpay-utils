export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cache = new Map<any, any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ((...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
};
