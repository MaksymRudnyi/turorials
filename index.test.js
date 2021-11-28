const { sum, multiply }  = require('./index');

describe('function sum', () => {
    describe('when there are 2 valid params', () => {
        it('should add 1 + 2 to equal 3', () => {
            const result = sum(1, 2);
            const expectedResult = 3;

            expect(result).toBe(expectedResult);
        });
    });

    describe('when second argument is missing', () => {
        it('should add 2 to equal 2', () => {
            const result = sum(2);
            const expectedResult = 2;

            expect(result).toBe(expectedResult);
        });
    });

    describe('when first argument is missing', () => {
        it('should add 2 to equal 2', () => {
            const result = sum(undefined, 2);
            const expectedResult = 2;

            expect(result).toBe(expectedResult);
        });
    })
});

describe('function multiply', () => {
    describe('when there are 2 valid params', () => {
        it('should multiply 2 * 2 to equal 4', () => {
            const result = multiply(2, 2);
            const expectedResult = 4;

            expect(result).toBe(expectedResult);
        });
    });
});