describe('Tests', () => {
    it('isEven is function', () => {
        expect(typeof isEven).toBe('function');
    });
    it('isEven', () => {
        const even = [0, 2, -2, 4, -4, 10, 1234, -378];
        even.forEach(num => {
            expect(isEven(num)).toBe(true);
            expect(isEven(num + 1)).toBe(false);
        });
    });

    it('factorial is function', () => {
        expect(typeof factorial).toBe('function');
    });
    it('factorial', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(3)).toBe(6);
        expect(factorial(4)).toBe(24);
        expect(factorial(5)).toBe(120);
        expect(factorial(10)).toBe(3628800);
    });
});
