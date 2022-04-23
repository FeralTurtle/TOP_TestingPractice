import {capitalize, reverseString, calculator, analyzeArray } from './main.js';

test('capitalizes first letter of string', () => {
    expect(capitalize('foo')).toEqual('Foo');
});

test('reverses a string', () => {
    expect(reverseString('foo')).toEqual('oof');
});

test('object methods work as expected', () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.subtract(2,1)).toBe(1);
    expect(calculator.divide(4,2)).toBe(2);
    expect(calculator.multiply(1,2)).toBe(2);
});
