import { BackgroundAxes } from './brackground_axes.js';
import { CanvaController } from './canva_controller.js';
import { FunctionGeneric } from './function_generic.js';
import { FunctioSenTaylor } from './function_sen_taylor.js';
function main() {
    const canvaObject = new CanvaController('fondo');
    const DrawAxes = new BackgroundAxes();
    canvaObject.draw(DrawAxes);
    const sine = (x) => Math.sin(x);
    const functionX = (x) => x;
    const functionXByX = (x) => x * x;
    const functionOneDivideX = (x) => 1 / x;
    const functionXBySin = (x) => x * Math.sin(x);
    const funcionSen = new FunctionGeneric(functionXBySin.toString(), functionXBySin);
    const functionTaylor = new FunctioSenTaylor(5);
    canvaObject.draw(functionTaylor);
}
main();
//# sourceMappingURL=client-main.js.map