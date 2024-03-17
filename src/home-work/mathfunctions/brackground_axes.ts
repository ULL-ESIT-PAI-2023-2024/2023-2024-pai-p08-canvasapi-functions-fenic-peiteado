
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
import { CONFIGURE_CANVA } from "./utils.js";

export class BackgroundAxes {
  constructor(private contextCanva: CanvasRenderingContext2D) {}

  /**
   * * Draw axes on the canvas element.
   * This method draws Cartesian axes on the canvas using the 2D rendering
   * context (contextCanva).
   */
  drawAxiss() {
    const canvasElement = this.contextCanva.canvas;
    this.contextCanva.scale(1, -1);
    this.contextCanva.lineWidth = 2;
    this.contextCanva.moveTo(0, 0);
    this.contextCanva.lineTo(canvasElement.width / 2, 0);
    this.contextCanva.stroke();
    this.contextCanva.moveTo(0, 0);
    this.contextCanva.lineTo(-canvasElement.width / 2, 0);
    this.contextCanva.stroke();
    this.contextCanva.moveTo(0, 0);
    this.contextCanva.lineTo(0, canvasElement.height / 2);
    this.contextCanva.stroke();
    this.contextCanva.lineTo(0, -canvasElement.height / 2);
    this.contextCanva.stroke();
    this.drawAllLineHorizontal();
    this.drawAllLineVertical();
  }
  
  
  /**
   * Draw a dashline from upper to lower canvas frame
   * @param numberPositionX values in the position X where draw line vertical
  */
 private drawDashedLineInX(numberPositionX: number) {
   const canvasElement = this.contextCanva.canvas;
   // calculate the point opposite from y
   const pointYLower = -canvasElement.height / 2;
   const pointYUpper = canvasElement.height / 2;
   this.contextCanva.strokeStyle = 'gray';
   const largeLine = 1;
   const largeSpace = 1;
   this.contextCanva.setLineDash([largeLine, largeSpace]);  // dasheline
   this.contextCanva.moveTo(numberPositionX, pointYUpper);
   this.contextCanva.lineTo(numberPositionX, pointYLower);
   this.contextCanva.stroke();
    this.drawTextInX(numberPositionX, 10, (numberPositionX/CONFIGURE_CANVA.SCALE).toString());
  }

  /**
   * Draw a text in the position numberPositionX, numberPositionY in the canva you must 
   * use -y because the canva is inverted  
   * @param numberPositionX value in the position x where draw a text
   */
  private drawTextInX(numberPositionX: number, numberPositionY: number, text: string) {
    this.contextCanva.scale(1,-1);
    const SIZE_TEXT = CONFIGURE_CANVA.SCALE/10;
    this.contextCanva.font = `${SIZE_TEXT}px serif`;
    this.contextCanva.fillText(text, numberPositionX, numberPositionY);
    this.contextCanva.scale(1,-1);
  }
  
  /**
   * Draw a line in the position numberPositionY in the canva
   * @param numberPositionY  value in the position y where dray a line
   */
  private drawDashedLineInY(numberPositionY: number) {
    const canvasElement = this.contextCanva.canvas;
    const pointXLower = -canvasElement.width / 2;
    const pointXUpper = canvasElement.width / 2;
    this.contextCanva.strokeStyle = 'gray';
    const largeLine = 1;
    const largeSpace = 1;
    this.contextCanva.setLineDash([largeLine, largeSpace]);  // dasheline
    this.contextCanva.moveTo(pointXLower, numberPositionY);
    this.contextCanva.lineTo(pointXUpper, numberPositionY);
    this.contextCanva.stroke();
    this.drawTextInX(10, numberPositionY, (-numberPositionY/CONFIGURE_CANVA.SCALE).toString());
  }

  /**
   * Draw all Lines vertical in the canva
   */
  private drawAllLineVertical() {
    const canvasElement = this.contextCanva.canvas;
   //  const numberOfDivision = CONFIGURE_CANVA.SCALE;  // Number of division ,"square"
    const OFFSET: number  = CONFIGURE_CANVA.SCALE;;
    const leftFrame = -(canvasElement.width / 2);
    for (let i = leftFrame; i <canvasElement.width; i = i + OFFSET) {
      if (OFFSET < 100 ){
        if (i % 10 == 0){
          this.drawDashedLineInX(i);
        }
      }else{
        this.drawDashedLineInX(i);
      }
    }
  }

  /**
   * Draw all line horizontal in the  canva
   */
  private drawAllLineHorizontal() {
    const canvasElement = this.contextCanva.canvas;
    const numberOfDivision = CONFIGURE_CANVA.SCALE;  // Number of division ,"square"
    const OFFSET: number = numberOfDivision;
    const leftFrame = -(canvasElement.height / 2);
    for (let i = leftFrame; i <canvasElement.height; i = i + OFFSET) {
      this.drawDashedLineInY(i);
    }
  }


}