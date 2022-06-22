/**
 * 
 * @returns rgb( [0-255], [0-255], [0-255] )
 */
export function getRandColor() {
  const r = getRandBetween(0, 255);
  const g = getRandBetween(0, 255);
  const b = getRandBetween(0, 255);

  return `rgb(${r}, ${g}, ${b})`;
}
/**
 * 
 * @param {Number} min random value
 * @param {Number} max random value
 * @returns Random number between Min and Max
 */
export function getRandBetween(min, max) {
  return Math.round(Math.random() * (max - min));
}
/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @param {Number} small 
 * @returns Min or Max exactly
 */
export function getRandBetweenHard(min, max, small) {
  return Math.random() < 0.5 
    ? getRandBetween(min, min + small) 
    : getRandBetween(max, max - small);
}
/**
 * 
 * @returns current FPS
 */
export function FPSmeter() {
  const times = Array(60).fill(performance.now());

  return function FPS() {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    if (times.length < 65)
      times.push(now);
    return times.length;
  }
}
/**
 * @param {Function} fn to callback
 * @param {Number} ms interval that tells how often trigger callback 
 * @returns throttling function
 */
export function Throttle(fn, ms) {
  let timer = null;

  return function throttling(...args) {
    if (timer) return;

    timer = setTimeout(() => {
      fn(...args);
      clearTimeout(timer);
      timer = null;
    }, ms);
  }
}