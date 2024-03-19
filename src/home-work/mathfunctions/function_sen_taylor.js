import { CONFIGURE_CANVA, getRamdomColor } from './utils.js';
export class FunctioSenTaylor {
    constructor(polynomialDegree) {
        this.polynomialDegree = polynomialDegree;
    }
    draw(context) {
        const SCALE = CONFIGURE_CANVA.SCALE;
        const limitXLower = -(context.canvas.width / (2 * SCALE));
        const limitXUpper = context.canvas.width / (2 * SCALE);
        const incrementScale = 1 / SCALE;
        const colorText = getRamdomColor();
        context.strokeStyle = colorText;
        context.beginPath();
        const valueInY = this.evaluteInX(limitXLower);
        context.moveTo(limitXLower * SCALE, valueInY * SCALE);
        for (let i = limitXLower + incrementScale; i < limitXUpper; i = i + incrementScale) {
            const valueInY = this.evaluteInX(i);
            context.lineTo(i * SCALE, valueInY * SCALE);
            context.stroke();
        }
        context.strokeStyle = 'black';
    }
    evaluteInX(pointX) {
        if (pointX < 2) {
            return pointX;
        }
        let result = pointX;
        let partial = 0;
        let rest = -1;
        for (let i = 3; i < this.polynomialDegree; i = i + 2) {
            partial += (Math.pow(pointX, i) / this.factorial(i)) * rest;
            rest *= -1;
        }
        return result - partial;
    }
    factorial(value) {
        let result = 1;
        for (let i = 1; i <= value; i++) {
            result *= result;
        }
        return result;
    }
}
//# sourceMappingURL=function_sen_taylor.js.map