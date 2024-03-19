/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @since 24/02/2024
 * @desc Interface for generic Function
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

import {Drawable} from './drawable.js';
import {FunctionMathematical} from './function_mathematical.js';
import {CONFIGURE_CANVA, getRamdomColor} from './utils.js';


export class FunctioSenTaylor implements Drawable{

  constructor(private polynomialDegree:number){}

  /**
   *  Draw the function in the canva
   * @param context  context of the canva
   */
  draw(context: CanvasRenderingContext2D): void {
       // get limit the values x lower and upper
    const SCALE: number = CONFIGURE_CANVA.SCALE
    const limitXLower: number = -(context.canvas.width / (2 * SCALE));
    const limitXUpper: number = context.canvas.width / (2 * SCALE);
    const incrementScale: number = 1 / SCALE;
    const colorText: string = getRamdomColor();
    context.strokeStyle = colorText;
    context.beginPath();
    const valueInY = this.evaluteInX(limitXLower);
    context.moveTo(limitXLower * SCALE, valueInY * SCALE);
    for (let i = limitXLower + incrementScale; i < limitXUpper;
         i = i + incrementScale) {
      const valueInY = this.evaluteInX(i);
      context.lineTo(i * SCALE, valueInY * SCALE);
      context.stroke();
    }
//  this.drawIdentifier(context, colorText);
    context.strokeStyle = 'black';
  }

  /**
   * Calculate the value in the point x
   * @param pointX value in the point x
   * @returns value en y
   */
  public evaluteInX(pointX:number):number{
    if( pointX < 2){
      return pointX;
    }
    let result:number = pointX;
    let partial:number = 0
    let rest:number = -1;
    for( let i = 3; i < this.polynomialDegree; i= i+2) {
       partial += (Math.pow(pointX,i)/this.factorial(i))*rest;
       rest*=-1;
    }
    return result-partial;
  }

  /**
   * Calculate the factorial number
   * @param value the result 
   */
  private factorial(value:number) {
    let result = 1;
    for(let i = 1; i<= value; i++){
      result*=result;

    }
    return result;
  }

}