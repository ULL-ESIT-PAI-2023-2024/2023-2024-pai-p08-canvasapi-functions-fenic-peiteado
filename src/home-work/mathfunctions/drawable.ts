/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @since 24/02/2024
 * @desc used for pattern strategy for draw in canva
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */

export interface Drawable {
  draw(context: CanvasRenderingContext2D): void;
}
