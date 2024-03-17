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
    }
}
//# sourceMappingURL=axes.js.map