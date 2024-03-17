import { CONFIGURE_CANVA } from "./utils.js";
export class BackgroundAxes {
    constructor(contextCanva) {
        this.contextCanva = contextCanva;
    }
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
    drawDashedLineInX(numberPositionX) {
        const canvasElement = this.contextCanva.canvas;
        const pointYLower = -canvasElement.height / 2;
        const pointYUpper = canvasElement.height / 2;
        this.contextCanva.strokeStyle = 'gray';
        const largeLine = 1;
        const largeSpace = 1;
        this.contextCanva.setLineDash([largeLine, largeSpace]);
        this.contextCanva.moveTo(numberPositionX, pointYUpper);
        this.contextCanva.lineTo(numberPositionX, pointYLower);
        this.contextCanva.stroke();
        this.drawTextInX(numberPositionX, 10, (numberPositionX / CONFIGURE_CANVA.SCALE).toString());
    }
    drawTextInX(numberPositionX, numberPositionY, text) {
        this.contextCanva.scale(1, -1);
        const SIZE_TEXT = CONFIGURE_CANVA.SCALE / 10;
        this.contextCanva.font = `${SIZE_TEXT}px serif`;
        this.contextCanva.fillText(text, numberPositionX, numberPositionY);
        this.contextCanva.scale(1, -1);
    }
    drawDashedLineInY(numberPositionY) {
        const canvasElement = this.contextCanva.canvas;
        const pointXLower = -canvasElement.width / 2;
        const pointXUpper = canvasElement.width / 2;
        this.contextCanva.strokeStyle = 'gray';
        const largeLine = 1;
        const largeSpace = 1;
        this.contextCanva.setLineDash([largeLine, largeSpace]);
        this.contextCanva.moveTo(pointXLower, numberPositionY);
        this.contextCanva.lineTo(pointXUpper, numberPositionY);
        this.contextCanva.stroke();
        this.drawTextInX(10, numberPositionY, (-numberPositionY / CONFIGURE_CANVA.SCALE).toString());
    }
    drawAllLineVertical() {
        const canvasElement = this.contextCanva.canvas;
        const OFFSET = CONFIGURE_CANVA.SCALE;
        ;
        const leftFrame = -(canvasElement.width / 2);
        for (let i = leftFrame; i < canvasElement.width; i = i + OFFSET) {
            if (OFFSET < 100) {
                if (i % 10 == 0) {
                    this.drawDashedLineInX(i);
                }
            }
            else {
                this.drawDashedLineInX(i);
            }
        }
    }
    drawAllLineHorizontal() {
        const canvasElement = this.contextCanva.canvas;
        const numberOfDivision = CONFIGURE_CANVA.SCALE;
        const OFFSET = numberOfDivision;
        const leftFrame = -(canvasElement.height / 2);
        for (let i = leftFrame; i < canvasElement.height; i = i + OFFSET) {
            this.drawDashedLineInY(i);
        }
    }
}
//# sourceMappingURL=brackground_axes.js.map