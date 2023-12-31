export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const calls = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, calls + 1);

  if (calls + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
