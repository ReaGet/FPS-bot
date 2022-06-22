/**
 * 
 * @param {Context} ctx Cavnas context 
 */
function Draw(ctx) {
  this.ctx = ctx;
}
/**
 * 
 * @param {String} text to display
 * @param {Number} x position by x
 * @param {Number} y position by y
 * @param {String} color RGBA or HEX color in string `rgba(0, 0, 0, 1)` 
 * @param {String} font font-size, font-weight, font-family `bold 24px monospace`
 */
Draw.prototype.text = function(text, x, y, color, font) {
  this.ctx.fillStyle = color || '#333';
  this.ctx.font = font || '24px monospace';
  this.ctx.fillText(text, x, y);
}
/**
 * 
 * @param {String} text to display
 * @param {Number} x position by x
 * @param {Number} y position by y
 * @param {String} textColor RGBA or HEX color in string `rgba(0, 0, 0, 1)` 
 * @param {String} bgColor RGBA or HEX color in string `rgba(0, 0, 0, 1)` 
 * @param {String} size font-weight: 600, font-size: size, font-family: monospace
 */
Draw.prototype.textOverlay = function(text, x, y, textColor, bgColor, size) {
  let {width} = this.measureText(text);

  this.rect(x, y, width + 20, size * 2, bgColor);
  this.text(text, x + 10, y + size * 1.25, textColor, `600 ${size}px monospace`);
}
/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} color RGBA or HEX color in string `rgba(0, 0, 0, 1)` 
 */
Draw.prototype.rect = function(x, y, width, height, color) {
  this.ctx.fillStyle = color;
  this.ctx.fillRect(x, y, width, height);
}
/**
 * 
 * @param {String} text 
 * @returns Object with parameters
 */
Draw.prototype.measureText = function(text) {
  return this.ctx.measureText(text);
}

export {Draw};