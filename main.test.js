import {capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './main.js';

test('capitalizes first letter of string', () => {
    expect(capitalize('foo')).toEqual('Foo');
});
