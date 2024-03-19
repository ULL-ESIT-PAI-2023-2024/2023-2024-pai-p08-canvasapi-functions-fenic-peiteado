/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @since 24/02/2024
 * @desc This object is used for draw the axes in the canvas
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

import {Drawable} from './drawable.js';
import {CONFIGURE_CANVA} from './utils.js';

export class BackgroundAxes implements Drawable {
  /**
   * Create a BackgroundAxes object
   */
  constructor() {}

  /**
   * Draw the axes in the canvas
   * @param context canva
   */
  public draw(contextCanva: CanvasRenderingContext2D): void {
    this.drawAxiss(contextCanva);
  }

  /**
   * * Draw axes on the canvas element.
   * This method draws Cartesian axes on the canvas using the 2D rendering
   * @param contextCanva context of the canva
   */
  drawAxiss(contextCanva: CanvasRenderingContext2D) {
    const canvasElement = contextCanva.canvas;
    contextCanva.scale(1, -1);
    contextCanva.lineWidth = 2;
    contextCanva.moveTo(0, 0);
    contextCanva.lineTo(canvasElement.width / 2, 0);
    contextCanva.stroke();
    contextCanva.moveTo(0, 0);
    contextCanva.lineTo(-canvasElement.width / 2, 0);
    contextCanva.stroke();
    contextCanva.moveTo(0, 0);
    contextCanva.lineTo(0, canvasElement.height / 2);
    contextCanva.stroke();
    contextCanva.lineTo(0, -canvasElement.height / 2);
    contextCanva.stroke();
    this.drawAllLineHorizontal(contextCanva);
    this.drawAllLineVertical(contextCanva);
  }


  /**
   * Draw a dashline from upper to lower canvas frame
   * @param numberPositionX values in the position X where draw line vertical
   * @param contextCanva context of the canva
   */
  private drawDashedLineInX(
      contextCanva: CanvasRenderingContext2D, numberPositionX: number) {
    const canvasElement = contextCanva.canvas;
    // calculate the point opposite from y
    const pointYLower = -canvasElement.height / 2;
    const pointYUpper = canvasElement.height / 2;
    contextCanva.strokeStyle = 'gray';
    const largeLine = 1;
    const largeSpace = 1;
    contextCanva.setLineDash([largeLine, largeSpace]);  // dasheline
    contextCanva.moveTo(numberPositionX, pointYUpper);
    contextCanva.lineTo(numberPositionX, pointYLower);
    contextCanva.stroke();
    let multiple: number = -numberPositionX/CONFIGURE_CANVA.SCALE
      if(multiple % 2 ===0){
        this.drawTextInX(
          contextCanva, numberPositionX, 10,
          (numberPositionX / CONFIGURE_CANVA.SCALE).toString());
      }

  }

  /**
   * Draw a text in the position numberPositionX, numberPositionY in the canva
   * you must use -y because the canva is inverted
   * @param numberPositionX value in the position x where draw a text
   * @param contextCanva context of the canva
   */
  private drawTextInX(
      contextCanva: CanvasRenderingContext2D, numberPositionX: number,
      numberPositionY: number, text: string) {
    contextCanva.scale(1, -1);
    const SIZE_TEXT = CONFIGURE_CANVA.SCALE / 4;
    contextCanva.font = `${SIZE_TEXT}px serif`;
    contextCanva.fillText(text, numberPositionX, numberPositionY);
    contextCanva.scale(1, -1);
  }

  /**
   * Draw a line in the position numberPositionY in the canva
   * @param numberPositionY  value in the position y where dray a line
   * @param contextCanva context of the canva
   */
  private drawDashedLineInY(
      contextCanva: CanvasRenderingContext2D, numberPositionY: number) {
    const canvasElement = contextCanva.canvas;
    const pointXLower = -canvasElement.width / 2;
    const pointXUpper = canvasElement.width / 2;
    contextCanva.strokeStyle = 'gray';
    const largeLine = 1;
    const largeSpace = 1;
    contextCanva.setLineDash([largeLine, largeSpace]);  // dasheline
    contextCanva.moveTo(pointXLower, numberPositionY);
    contextCanva.lineTo(pointXUpper, numberPositionY);
    contextCanva.stroke();
    if (numberPositionY !== 0){
      let multiple: number = -numberPositionY/CONFIGURE_CANVA.SCALE
      if(multiple % 2 ===0){
        this.drawTextInX(
          contextCanva, 10, numberPositionY,
          (-numberPositionY / CONFIGURE_CANVA.SCALE).toString());
      }
      
    }
  }

  /**
   * Draw all Lines vertical in the canva
   *  @param contextCanva context of the canva
   */
  private drawAllLineVertical(contextCanva: CanvasRenderingContext2D) {
    const canvasElement = contextCanva.canvas;
    //  const numberOfDivision = CONFIGURE_CANVA.SCALE;  // Number of division
    //  ,"square"
    const OFFSET: number = CONFIGURE_CANVA.SCALE;
    const leftFrame: number = -(canvasElement.width / 2);
    for (let i = leftFrame; i < canvasElement.width; i = i + OFFSET) {
      if (OFFSET < 100) {
        if (i % 10 == 0) {
          this.drawDashedLineInX(contextCanva, i);
        }
      } else {
        this.drawDashedLineInX(contextCanva, i);
      }
    }
  }

  /**
   * Draw all line horizontal in the  canva
   * @param contextCanva context of the canva
   */
  private drawAllLineHorizontal(contextCanva: CanvasRenderingContext2D) {
    const canvasElement = contextCanva.canvas;
    const OFFSET: number = CONFIGURE_CANVA.SCALE;
    const leftFrame = -(canvasElement.height / 2);
    for (let i = leftFrame; i < canvasElement.height; i = i + OFFSET) {
      if (OFFSET < 100) {
        if (i % 10 == 0) {
          this.drawDashedLineInY(contextCanva, i);
        }
      } else {
        this.drawDashedLineInY(contextCanva, i);
      }
    }
  }
}