/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @since 24/02/2024
 * @desc Client File 
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

import {CanvaController} from './canva_controller.js'
import { FunctionGeneric } from './function_generic.js';
import {BackgroundAxes} from './brackground_axes.js'

const canvaObject: CanvaController = new CanvaController('fondo');
const DrawAxes = new BackgroundAxes(canvaObject.getcontextCanva());
DrawAxes.drawAxiss();

const sine = (x: number) => Math.sin(x);
const functionX = (x: number) => x;
const functionX2 = (x: number) => x*x;
const functionX3 = (x: number) => x*x + 2;

const funcionSen = new FunctionGeneric('functionX', functionX3);

canvaObject.draw(funcionSen);


