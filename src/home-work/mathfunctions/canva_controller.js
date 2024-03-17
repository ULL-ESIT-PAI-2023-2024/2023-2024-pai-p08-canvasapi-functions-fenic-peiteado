import { CONFIGURE_CANVA } from "./utils.js";
export class CanvaController {
    constructor(canvasId) {
        const canvasElement = document.getElementById(canvasId);
        if (!canvasElement) {
            throw new Error(`No canvas element found with ID ${canvasId}`);
        }
        this.canvasElement = canvasElement;
        this.contextCanva = this.canvasElement.getContext('2d');
        this.contextCanva.translate(this.canvasElement.width / 2, this.canvasElement.height / 2);
    }
    draw(functionGrapeh) {
        functionGrapeh.draw(this.contextCanva);
    }
    getcontextCanva() {
        return this.contextCanva;
    }
    drawAxiss() {
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
    drawDashedLineInX(numberPositionX) {
        const pointYLower = -this.canvasElement.height;
        const pointYUpper = this.canvasElement.height / 2;
        this.contextCanva.strokeStyle = 'gray';
        const largeLine = 1;
        const largeSpace = 1;
        this.contextCanva.setLineDash([largeLine, largeSpace]);
        this.contextCanva.moveTo(numberPositionX, pointYUpper);
        this.contextCanva.lineTo(numberPositionX, pointYLower);
        this.contextCanva.stroke();
    }
    drawDashedLineInY(numberPositionY) {
        const pointXLower = -this.canvasElement.width;
        const pointXUpper = this.canvasElement.width / 2;
        this.contextCanva.strokeStyle = 'gray';
        const largeLine = 1;
        const largeSpace = 1;
        this.contextCanva.setLineDash([largeLine, largeSpace]);
        this.contextCanva.moveTo(pointXLower, numberPositionY);
        this.contextCanva.lineTo(pointXUpper, numberPositionY);
        this.contextCanva.stroke();
    }
    drawAllLineVertical() {
        const numberOfDivision = CONFIGURE_CANVA.SCALE;
        const OFFSET = this.canvasElement.width / numberOfDivision;
        const leftFrame = -(this.canvasElement.width / 2);
        for (let i = leftFrame; i < this.canvasElement.width; i = i + OFFSET) {
            this.drawDashedLineInX(i);
        }
    }
    drawAllLineHorizontal() {
        const numberOfDivision = CONFIGURE_CANVA.SCALE;
        const OFFSET = this.canvasElement.height / numberOfDivision;
        const leftFrame = -(this.canvasElement.height / 2);
        for (let i = leftFrame; i < this.canvasElement.height; i = i + OFFSET) {
            this.drawDashedLineInY(i);
        }
    }
}
//# sourceMappingURL=canva_controller.js.map