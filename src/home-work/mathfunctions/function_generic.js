import { CONFIGURE_CANVA, getRamdomColor } from './utils.js';
export class FunctionGeneric {
    constructor(identifier, functionMathematical) {
        this.identifier = identifier;
        this.functionMathematical = functionMathematical;
    }
    evaluatInX(pointX) {
        return this.functionMathematical(pointX);
    }
    draw(canvasContext) {
        const SCALE = CONFIGURE_CANVA.SCALE;
        const limitXLower = -(canvasContext.canvas.width / (2 * SCALE));
        const limitXUpper = canvasContext.canvas.width / (2 * SCALE);
        const incrementScale = 1 / SCALE;
        const colorText = getRamdomColor();
        canvasContext.strokeStyle = colorText;
        canvasContext.beginPath();
        const valueInY = this.evaluatInX(limitXLower);
        canvasContext.moveTo(limitXLower * SCALE, valueInY * SCALE);
        for (let i = limitXLower + incrementScale; i < limitXUpper; i = i + incrementScale) {
            const valueInY = this.evaluatInX(i);
            canvasContext.lineTo(i * SCALE, valueInY * SCALE);
            canvasContext.stroke();
        }
        canvasContext.strokeStyle = 'black';
    }
    drawIdentifier(canvasContext, colorText) {
        const SCALE = CONFIGURE_CANVA.SCALE;
        const DIVIDE_SCALE = 4;
        const SIZE_TEXT = SCALE / DIVIDE_SCALE;
        const valueInX = -canvasContext.canvas.width / 2;
        const valueInY = -canvasContext.canvas.height / 2.5;
        canvasContext.fillStyle = colorText;
        canvasContext.scale(1, -1);
        canvasContext.font = `${SIZE_TEXT}px serif`;
        canvasContext.fillText(this.identifier, valueInX, valueInY);
        canvasContext.scale(1, -1);
    }
}
//# sourceMappingURL=function_generic.js.map