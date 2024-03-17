import { CONFIGURE_CANVA } from './utils.js';
export class FunctionGeneric {
    constructor(identifier, functionMathematical) {
        this.identifier = identifier;
        this.functionMathematical = functionMathematical;
    }
    evaluatInX(pointX) {
        return this.functionMathematical(pointX);
    }
    draw(ctx) {
        const SCALE = CONFIGURE_CANVA.SCALE;
        const limitXLower = -(ctx.canvas.width / (2 * SCALE));
        const limitXUpper = ctx.canvas.width / (2 * SCALE);
        const incrementScale = 1 / SCALE;
        ctx.beginPath();
        const valueInY = this.evaluatInX(limitXLower);
        ctx.moveTo(limitXLower * SCALE, valueInY * SCALE);
        for (let i = limitXLower + incrementScale; i < limitXUpper; i = i + incrementScale) {
            const valueInY = this.evaluatInX(i);
            ctx.lineTo(i * SCALE, valueInY * SCALE);
            ctx.stroke();
        }
    }
}
//# sourceMappingURL=function_generic.js.map