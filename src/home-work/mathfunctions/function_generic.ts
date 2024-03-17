import {FunctionMathematical} from './function_mathematical.js';
import {CONFIGURE_CANVA} from './utils.js';


export class FunctionGeneric {
  /**
   * Create object FunctionGeneric
   * @param identifier identifer of function
   */
  constructor(
      private identifier: string,
      private functionMathematical: FunctionMathematical) {}

  /**
   * Calculate of value in the coordinate of y
   * @param pointX value in the point x
   * @returns  value in Y
   */
  public evaluatInX(pointX: number): number {
    return this.functionMathematical(pointX);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    // get limit the values x lower and upper
    const SCALE = CONFIGURE_CANVA.SCALE
    const limitXLower = -(ctx.canvas.width / (2 * SCALE));
    const limitXUpper = ctx.canvas.width / (2 * SCALE);
    const incrementScale = 1 / SCALE;
    ctx.beginPath();
    const valueInY = this.evaluatInX(limitXLower);
    ctx.moveTo(limitXLower * SCALE, valueInY * SCALE);
    for (let i = limitXLower+incrementScale; i < limitXUpper; i = i + incrementScale) {
      const valueInY = this.evaluatInX(i);
      ctx.lineTo(i * SCALE, valueInY * SCALE);
      ctx.stroke();
    }
  }
}
