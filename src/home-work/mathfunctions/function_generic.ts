/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @since 24/02/2024
 * @desc function generic for draw in the canva
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

import {Drawable} from './drawable.js';
import {FunctionMathematical} from './function_mathematical.js';
import {CONFIGURE_CANVA, getRamdomColor} from './utils.js';

export class FunctionGeneric implements Drawable {
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

  /**
   *  Draw the function in the canva
   * @param canvasContext  context of the canva
   */
  public draw(canvasContext: CanvasRenderingContext2D): void {
    // get limit the values x lower and upper
    const SCALE: number = CONFIGURE_CANVA.SCALE
    const limitXLower: number = -(canvasContext.canvas.width / (2 * SCALE));
    const limitXUpper: number = canvasContext.canvas.width / (2 * SCALE);
    const incrementScale: number = 1 / SCALE;
    const colorText: string = getRamdomColor();
    canvasContext.strokeStyle = colorText;
    canvasContext.beginPath();
    const valueInY = this.evaluatInX(limitXLower);
    canvasContext.moveTo(limitXLower * SCALE, valueInY * SCALE);
    for (let i = limitXLower + incrementScale; i < limitXUpper;
         i = i + incrementScale) {
      const valueInY = this.evaluatInX(i);
      canvasContext.lineTo(i * SCALE, valueInY * SCALE);
      canvasContext.stroke();
    }
//  this.drawIdentifier(canvasContext, colorText);
    canvasContext.strokeStyle = 'black';
  }

  /**
   * Drawing the identifier of the function in the canva
   * @param canvasContext canva
   * @param colorText color of the text
   */
  public drawIdentifier(
      canvasContext: CanvasRenderingContext2D, colorText: string): void {
    const SCALE = CONFIGURE_CANVA.SCALE
    const DIVIDE_SCALE = 4;
    const SIZE_TEXT = SCALE / DIVIDE_SCALE;
    const valueInX = -canvasContext.canvas.width / 2
    const valueInY = -canvasContext.canvas.height / 2.5;
    // cambiar el color del texto
    canvasContext.fillStyle = colorText;
    canvasContext.scale(1, -1);
    canvasContext.font = `${SIZE_TEXT}px serif`;
    canvasContext.fillText(this.identifier, valueInX, valueInY);
    canvasContext.scale(1, -1);
  }
}
