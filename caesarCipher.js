const shiftChar = (char, offset) => {
    let charCode = char.charCodeAt(0);
    //Shift a-z
    if (charCode >= 97 && charCode <= 123) {
        charCode += offset;
        //Change offsets from z to a
        if (char.charCodeAt(0) === 123) {
            charCode = 97;
        };
    };
    return String.fromCharCode(charCode);
};

const caesarCipher = (string) => {
    const resultArray = [];
    //For each char in string, shift char
    for (let i = 0; i < string.length; i++) {
        const currentChar = string.toLowerCase().charAt(i);
        const processedChar = shiftChar(currentChar, 1);
        resultArray.push(processedChar);
    };
    const result = resultArray.join('');
    return result;
};

export { caesarCipher };
