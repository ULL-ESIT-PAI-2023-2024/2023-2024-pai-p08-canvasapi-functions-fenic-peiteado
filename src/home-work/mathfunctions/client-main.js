import { CanvaController } from './canva_controller.js';
import { FunctionGeneric } from './function_generic.js';
import { BackgroundAxes } from './brackground_axes.js';
const canvaObject = new CanvaController('fondo');
const DrawAxes = new BackgroundAxes(canvaObject.getcontextCanva());
DrawAxes.drawAxiss();
const sine = (x) => Math.sin(x);
const functionX = (x) => x;
const functionX2 = (x) => x * x;
const functionX3 = (x) => x * x + 2;
const funcionSen = new FunctionGeneric('functionX', functionX3);
canvaObject.draw(funcionSen);
//# sourceMappingURL=client-main.js.map