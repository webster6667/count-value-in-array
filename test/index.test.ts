import countValueInArray from '../src'

describe('count search element in array', () => {

    test('count number value in array', () => {

        const arrayForCount = [1, 2, 3, 1, 1, 1],
            numberCount = countValueInArray(arrayForCount, 1)

        expect(numberCount).toBe(4)
    });

    test('count string value in array', () => {

        const arrayForCount = ['1', '2', '3', '1', '1', '1'],
            numberCount = countValueInArray(arrayForCount, '1')

        expect(numberCount).toBe(4)
    });

    test('count object value in array', () => {

        const arrayForCount = [
                {name: 'BMW', age: 2},
                {name: 'Audi', age: 3},
                {name: 'Porsche', age: 4},
                {name: 'BMW', age: 2},
            ],
            numberCount = countValueInArray(arrayForCount, {name: 'BMW', age: 2})

        expect(numberCount).toBe(2)
    });

})

