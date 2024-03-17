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


import { FunctionGeneric } from "./function_generic.js";
import { CONFIGURE_CANVA } from "./utils.js";


export class CanvaController {
  private canvasElement: HTMLCanvasElement;
  private contextCanva: CanvasRenderingContext2D;

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
    this.contextCanva = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;
    this.contextCanva.translate( this.canvasElement.width / 2, this.canvasElement.height / 2);
  }

  /**
   * draw in the canva a function mathematical
   * @param functionGrapeh function That draw in the canva
   */
  public draw(functionGrapeh: FunctionGeneric) {
    functionGrapeh.draw(this.contextCanva);
  }
  
  /**
   * Obtain the context of the canva
   * @returns the context of the canva
   */
  public getcontextCanva(): CanvasRenderingContext2D {
    return this.contextCanva;
  }

  /**
   * * Draw axes on the canvas element.
   * This method draws Cartesian axes on the canvas using the 2D rendering
   * context (contextCanva).
   */
  public drawAxiss() {
    this.contextCanva.scale(1, -1);
    this.contextCanva.lineWidth = 2;
    this.contextCanva.moveTo(0, 0);
    this.contextCanva.lineTo(this.canvasElement.width / 2, 0);
    this.contextCanva.stroke();
    this.contextCanva.moveTo(0, 0);
    this.contextCanva.lineTo(-this.canvasElement.width / 2, 0);
    this.contextCanva.stroke();
    this.contextCanva.moveTo(0, 0);
    this.contextCanva.lineTo(0, this.canvasElement.height / 2);
    this.contextCanva.stroke();
    this.contextCanva.lineTo(0, -this.canvasElement.height / 2);
    this.contextCanva.stroke();
  }

  /**
   * Draw a dashline from upper to lower canvas frame
   * @param numberPositionX values in the position X where draw line vertical
   */
  private drawDashedLineInX(numberPositionX: number) {
    // calculate the point opposite from y
    const pointYLower = -this.canvasElement.height;
    const pointYUpper = this.canvasElement.height / 2;
    this.contextCanva.strokeStyle = 'gray';
    const largeLine = 1;
    const largeSpace = 1;
    this.contextCanva.setLineDash([largeLine, largeSpace]);  // Discontinua
    this.contextCanva.moveTo(numberPositionX, pointYUpper);
    this.contextCanva.lineTo(numberPositionX, pointYLower);
    this.contextCanva.stroke();
  }


  private drawDashedLineInY(numberPositionY: number) {
    const pointXLower = -this.canvasElement.width;
    const pointXUpper = this.canvasElement.width / 2;
    this.contextCanva.strokeStyle = 'gray';
    const largeLine = 1;
    const largeSpace = 1;
    this.contextCanva.setLineDash([largeLine, largeSpace]);  // Discontinua
    this.contextCanva.moveTo(pointXLower, numberPositionY);
    this.contextCanva.lineTo(pointXUpper, numberPositionY);
    this.contextCanva.stroke();
  }

  /**
   * Draw all Lines vertical in the canva
   */
  private drawAllLineVertical() {
    const numberOfDivision = CONFIGURE_CANVA.SCALE;
    const OFFSET: number = this.canvasElement.width / numberOfDivision;
    const leftFrame = -(this.canvasElement.width / 2);
    for (let i = leftFrame; i < this.canvasElement.width; i = i + OFFSET) {
      this.drawDashedLineInX(i);
    }
  }

  /**
   * Draw all line horizontal in the  canva
   */
  private drawAllLineHorizontal() {
    const numberOfDivision = CONFIGURE_CANVA.SCALE;  // Number of division ,"square"
    const OFFSET: number = this.canvasElement.height / numberOfDivision;
    const leftFrame = -(this.canvasElement.height / 2);
    for (let i = leftFrame; i < this.canvasElement.height; i = i + OFFSET) {
      this.drawDashedLineInY(i);
    }
  }

}