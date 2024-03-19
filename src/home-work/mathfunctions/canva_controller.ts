/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @since 24/02/2024
 * @desc this file contain a object that control the canva and configure for
 * math graph
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

import {Drawable} from './drawable.js';
import {FunctionGeneric} from './function_generic.js';
import {CONFIGURE_CANVA} from './utils.js';

export class CanvaController {
  private canvasElement: HTMLCanvasElement;
  private contextCanva: CanvasRenderingContext2D; // falta s no hace falta canva

  /**
   *  Create a CanvaController object
   * @param canvasId Identifier of canva
   */
  constructor(canvasId: string) {
    const canvasElement = document.getElementById(canvasId);
    if (!canvasElement) {
      throw new Error(`No canvas element found with ID ${canvasId}`);
    }
    this.canvasElement = canvasElement as HTMLCanvasElement;
    this.contextCanva =
        this.canvasElement.getContext('2d') as CanvasRenderingContext2D;
    this.contextCanva.translate((this.canvasElement.width / 2), this.canvasElement.height / 2);
  }

  /**
   * draw in the canva a function mathematical
   * @param functionGrapeh function That draw in the canva
   */
  public draw(drawingObject: Drawable) {
    drawingObject.draw(this.contextCanva);
  }

  /**
   * Obtain the context of the canva
   * @returns the context of the canva
   */
  public getcontextCanva(): CanvasRenderingContext2D {
    return this.contextCanva;
  }
}