import { CONFIGURE_CANVA } from './utils.js';
export class BackgroundAxes {
    constructor() { }
    draw(contextCanva) {
        this.drawAxiss(contextCanva);
    }
    drawAxiss(contextCanva) {
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
    drawDashedLineInX(contextCanva, numberPositionX) {
        const canvasElement = contextCanva.canvas;
        const pointYLower = -canvasElement.height / 2;
        const pointYUpper = canvasElement.height / 2;
        contextCanva.strokeStyle = 'gray';
        const largeLine = 1;
        const largeSpace = 1;
        contextCanva.setLineDash([largeLine, largeSpace]);
        contextCanva.moveTo(numberPositionX, pointYUpper);
        contextCanva.lineTo(numberPositionX, pointYLower);
        contextCanva.stroke();
        let multiple = -numberPositionX / CONFIGURE_CANVA.SCALE;
        if (multiple % 2 === 0) {
            this.drawTextInX(contextCanva, numberPositionX, 10, (numberPositionX / CONFIGURE_CANVA.SCALE).toString());
        }
    }
    drawTextInX(contextCanva, numberPositionX, numberPositionY, text) {
        contextCanva.scale(1, -1);
        const SIZE_TEXT = CONFIGURE_CANVA.SCALE / 4;
        contextCanva.font = `${SIZE_TEXT}px serif`;
        contextCanva.fillText(text, numberPositionX, numberPositionY);
        contextCanva.scale(1, -1);
    }
    drawDashedLineInY(contextCanva, numberPositionY) {
        const canvasElement = contextCanva.canvas;
        const pointXLower = -canvasElement.width / 2;
        const pointXUpper = canvasElement.width / 2;
        contextCanva.strokeStyle = 'gray';
        const largeLine = 1;
        const largeSpace = 1;
        contextCanva.setLineDash([largeLine, largeSpace]);
        contextCanva.moveTo(pointXLower, numberPositionY);
        contextCanva.lineTo(pointXUpper, numberPositionY);
        contextCanva.stroke();
        if (numberPositionY !== 0) {
            let multiple = -numberPositionY / CONFIGURE_CANVA.SCALE;
            if (multiple % 2 === 0) {
                this.drawTextInX(contextCanva, 10, numberPositionY, (-numberPositionY / CONFIGURE_CANVA.SCALE).toString());
            }
        }
    }
    drawAllLineVertical(contextCanva) {
        const canvasElement = contextCanva.canvas;
        const OFFSET = CONFIGURE_CANVA.SCALE;
        const leftFrame = -(canvasElement.width / 2);
        for (let i = leftFrame; i < canvasElement.width; i = i + OFFSET) {
            if (OFFSET < 100) {
                if (i % 10 == 0) {
                    this.drawDashedLineInX(contextCanva, i);
                }
            }
            else {
                this.drawDashedLineInX(contextCanva, i);
            }
        }
    }
    drawAllLineHorizontal(contextCanva) {
        const canvasElement = contextCanva.canvas;
        const OFFSET = CONFIGURE_CANVA.SCALE;
        const leftFrame = -(canvasElement.height / 2);
        for (let i = leftFrame; i < canvasElement.height; i = i + OFFSET) {
            if (OFFSET < 100) {
                if (i % 10 == 0) {
                    this.drawDashedLineInY(contextCanva, i);
                }
            }
            else {
                this.drawDashedLineInY(contextCanva, i);
            }
        }
    }
}
//# sourceMappingURL=brackground_axes.js.map