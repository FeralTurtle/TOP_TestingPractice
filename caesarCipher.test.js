import { caesarCipher } from './caesarCipher.js';

test('Caesar cipher', () => {
    expect(caesarCipher('Foo.')).toEqual('gpp.');
});
