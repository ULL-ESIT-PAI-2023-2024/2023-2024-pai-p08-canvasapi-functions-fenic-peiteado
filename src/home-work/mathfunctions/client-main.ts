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

import {BackgroundAxes} from './brackground_axes.js'
import {CanvaController} from './canva_controller.js'
import {FunctionGeneric} from './function_generic.js';
import { FunctioSenTaylor } from './function_sen_taylor.js';

function main(): void {
  const canvaObject: CanvaController = new CanvaController('fondo');
  const DrawAxes = new BackgroundAxes();
  canvaObject.draw(DrawAxes); // no debe ver

  const sine = (x: number) => Math.sin(x);
  const functionX = (x: number) => x;
  const functionXByX = (x: number) => x * x;
  const functionOneDivideX = (x: number) => 1 / x;
  const functionXBySin = (x: number) => x * Math.sin(x);

  const funcionSen = new FunctionGeneric(functionXBySin.toString(), functionXBySin);
  const functionTaylor = new FunctioSenTaylor(5);
  canvaObject.draw(functionTaylor);
}


main();