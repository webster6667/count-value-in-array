import { CountValueInArray } from './types';
/**
 * @description
 * Count values in array
 *
 * @param {Array} arrayForCount - array where count value
 * @param {any} countValue - value which count
 * @returns {boolean}
 *
 * @example
 * const arrayForCount = [1, 2, 3, 1, 1, 1]
 * countValueInArray(arrayForCount, 1)
 * // => 4
 *
 * const arrayForCount = [
 *  {name: 'BMW', age: 2},
 *  {name: 'Audi', age: 3},
 *  {name: 'Porsche', age: 4},
 *  {name: 'BMW', age: 2},
 * ]
 * countValueInArray(arrayForCount, {name: 'BMW', age: 2})
 * // => 2
 */
declare const countValueInArray: CountValueInArray;
export default countValueInArray;
