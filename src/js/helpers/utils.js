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
 * @returns Min or Max exactly
 */
export function getRandBetweenHard(min, max) {
  return Math.random() < 0.5 
    ? min 
    : max;
}
/**
 * 
 * @returns current FPS
 */
export function FPSmeter() {
  const times = Array(60).fill(1000);

  return function FPS() {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }    
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