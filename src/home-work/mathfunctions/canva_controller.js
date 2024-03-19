export class CanvaController {
    constructor(canvasId) {
        const canvasElement = document.getElementById(canvasId);
        if (!canvasElement) {
            throw new Error(`No canvas element found with ID ${canvasId}`);
        }
        this.canvasElement = canvasElement;
        this.contextCanva =
            this.canvasElement.getContext('2d');
        this.contextCanva.translate((this.canvasElement.width / 2), this.canvasElement.height / 2);
    }
    draw(drawingObject) {
        drawingObject.draw(this.contextCanva);
    }
    getcontextCanva() {
        return this.contextCanva;
    }
}
//# sourceMappingURL=canva_controller.js.map