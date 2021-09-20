import {CountValueInArray} from './types'
import isObjectsEqual from 'is-objects-equal';


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
const countValueInArray:CountValueInArray = (arrayForCount, countValue) => {

    if (Array.isArray(arrayForCount)) {

        if (typeof countValue === "object") {
            return arrayForCount.filter(x => typeof x === "object" && isObjectsEqual([x, countValue])).length
        } else {
            return arrayForCount.filter(x => x == countValue).length
        }

    } else {
        throw new Error('first parameter is not Array')
    }

}


export default countValueInArray
