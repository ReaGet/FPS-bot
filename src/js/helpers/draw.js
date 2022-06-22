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

export {Draw};